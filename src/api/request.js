import axios from 'axios';
import { isNull, identity, isPlainObject, isUndefined, snakeCase, camelCase } from 'lodash';
import { normalize } from 'normalizr';
import config from 'src/config';
import { omitNulls } from 'src/helpers';
import * as errors from './errors';
import deepMapKeys from 'deep-map-keys';


const { API_PATH, API_BASE_URL } = config;


const serializeAuth = ({ email, password }) => ({
  username: email,
  password,
});


const toCamelCase = d => deepMapKeys(d, k => camelCase(k));


const toSnakeCase = d => deepMapKeys(d, k => snakeCase(k));


const parse = (d, { parseFn, normalizeCase }) => {
  const res = normalizeCase
    ? toCamelCase(d)
    : d;

  return parseFn(res);
};


const serialize = (d, { normalizeCase }) => normalizeCase && isPlainObject(d)
  ? toSnakeCase(d)
  : d;


const parseConf = ({
  url,
  method,
  data = null,
  auth = null,
  schema = null,
  params = null,
  normalizeCase = true,
  normalizeParamCase = true,
  parse: parseFn = identity,
  headers = {},
}) => ({
  parse,

  schema,

  normalizeCase,

  parseFn,

  options: omitNulls({
    method,

    url: API_BASE_URL + API_PATH + url,

    params: !isNull(params)
      ? serialize(params, { normalizeCase: normalizeParamCase })
      : null,

    data: !isNull(data)
      ? serialize(data, { normalizeCase })
      : null,

    headers,

    auth: !isNull(auth)
      ? serializeAuth(auth)
      : null,
  }),
});


const imageData = ({
  path = null,
  key = 'image',
  name = 'image.png',
  type = 'image/png',
}) => {
  const d = new FormData();

  d.append(key, {
    uri: path,
    name,
    type,
  });

  return d;
};


const requestSuccess = (res, { schema, ...opts }) => Promise.resolve(res.data)
  .then(d => parse(d, opts))
  .then(d => !isNull(schema)
    ? normalize(d, schema)
    : d);


const requestFailureErrorResponse = e => {
  const ErrorType = {
    400: errors.ApiDataInvalidError,
    401: errors.ApiAuthorizationError,
    403: errors.ApiAuthenticationError,
    404: errors.ApiNotFoundError,
  }[e.response.status] || errors.ApiResponseError;

  return new ErrorType(e.message, e.response);
};


const requestFailure = e => {
  let res = e;

  if (!isUndefined(e.response)) {
    res = requestFailureErrorResponse(e);
  } else if (e.message === 'Network Error') {
    res = new errors.NetworkError();
  }

  return Promise.reject(res);
};


const request = rawConf => {
  const { options, ...conf } = parseConf(rawConf);

  return axios(options)
    .then(res => requestSuccess(res, conf), requestFailure);
};


export default request;

export {
  imageData,
  serializeAuth,
};
