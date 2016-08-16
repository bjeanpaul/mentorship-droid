import axios from 'axios';
import { isNull, identity } from 'lodash';
import { normalize } from 'normalizr';
import config from 'src/config';
import { omitNulls } from 'src/helpers';


class ApiResponseError {
  constructor(message, response = null) {
    this.message = message;
    this.response = response;
  }
}

const { API_URL } = config;


const serializeAuth = ({ email, password }) => ({
  username: email,
  password
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

    data: !isNull(data)
      ? JSON.stringify(data)
      : null,
  }),
});


const requestSuccess = (res, { parse, schema }) => Promise.resolve(res.data)
  .then(parse)
  .then(d => !isNull(schema)
    ? normalize(d, schema)
    : d);


const requestFailure = e => Promise.reject(new ApiResponseError(e.message, e.response));


const request = rawConf => {
  const { options, ...conf } = parseConf(rawConf);

  return axios(options)
    .then(res => requestSuccess(res, conf), requestFailure);
};


export default request;

export {
  serializeAuth,
  ApiResponseError,
};
