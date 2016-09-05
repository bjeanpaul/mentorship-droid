import axios from 'axios';
import { isNull, identity } from 'lodash';
import { normalize } from 'normalizr';
import config from 'src/config';
import { omitNulls } from 'src/helpers';
import * as errors from './errors';
import snakeCase from 'decamelize';
import camelCase from 'camelcase';
import deepMapKeys from 'deep-map-keys';


const { API_URL } = config;


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


const serialize = d => toSnakeCase(d);


const parseConf = ({
  url,
  method,
  data = null,
  auth = null,
  schema = null,
  params = null,
  normalizeCase = true,
  parse: parseFn = identity,
  headers = {},
}) => ({
  parse,

  schema,

  normalizeCase,

  parseFn,

  options: omitNulls({
    url: API_URL + url,
    params,
    method,

    data: !isNull(data)
      ? serialize(data, { normalizeCase })
      : null,

    headers: omitNulls({
      ...headers,

      'Content-Type': !isNull(data)
        ? 'application/json'
        : null,
    }),

    auth: !isNull(auth)
      ? serializeAuth(auth)
      : null,
  }),
});


const imageData = ({
  path = null,
  name = null,
  type = null,
  key = 'image',
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


const requestFailure = e => {
  console.log(e)
  const ErrorType = {
    403: errors.ApiAuthenticationError,
    404: errors.ApiNotFoundError,
  }[e.response.status] || errors.ApiResponseError;

  return Promise.reject(new ErrorType(e.message, e.response));
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
