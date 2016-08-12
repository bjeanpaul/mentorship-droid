import qs from 'query-string';
import base64 from 'base-64';
import { isNull, identity } from 'lodash';
import { normalize } from 'normalizr';
import config from 'src/config';
import { omitNulls } from 'src/helpers';


class ApiResponseError {
  constructor(response) {
    this.response = response;
  }
}


const { API_URL } = config;


const serializeAuth = ({ email, password }) => {
  const token = base64.encode(`${email}:${password}`);
  return `Basic ${token}`;
};


const serializeQs = params => !isNull(params)
  ? `?${qs.stringify(params)}`
  : '';


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
  url: API_URL + url + serializeQs(params),

  parse,

  schema,

  options: omitNulls({
    method,

    headers: omitNulls({
      ...headers,

      'Content-Type': !isNull(data)
        ? 'application/json'
        : null,

      Authorization: !isNull(auth)
        ? serializeAuth(auth)
        : null,
    }),

    data: !isNull(data)
      ? JSON.stringify(data)
      : null,
  }),
});


const requestSuccess = (res, { parse, schema }) => res.json()
  .then(parse)
  .then(d => !isNull(schema)
    ? normalize(d, schema)
    : d);


const requestFailure = res => Promise.reject(new ApiResponseError(res));


const request = rawConf => {
  const { url, options, ...conf } = parseConf(rawConf);

  return fetch(url, options)
    .then(res => res.ok
      ? requestSuccess(res, conf)
      : requestFailure(res));
};


export default request;

export {
  serializeAuth,
  ApiResponseError,
};
