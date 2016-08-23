import axios from 'axios';
import { isNull, identity } from 'lodash';
import { normalize } from 'normalizr';
import config from 'src/config';
import { omitNulls } from 'src/helpers';
import * as errors from './errors';


const { API_URL } = config;


const serializeAuth = ({ email, password }) => ({
  username: email,
  password,
});


const parseConf = ({
  url,
  method,
  data = null,
  auth = null,
  schema = null,
  params = null,
  parse = identity,
  headers = {},
}) => ({
  parse,

  schema,

  options: omitNulls({
    url: API_URL + url,
    params,
    data,
    method,

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


const requestSuccess = (res, { parse, schema }) => Promise.resolve(res.data)
  .then(parse)
  .then(d => !isNull(schema)
    ? normalize(d, schema)
    : d);


const requestFailure = e => {
  const type = {
    403: errors.ApiAuthenticationError,
    404: errors.ApiNotFoundError,
  }[e.response.status] || errors.ApiResponseError;

  return Promise.reject(new type(e.message, e.response));
}


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
