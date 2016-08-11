import base64 from 'base-64';
import { isNull } from 'lodash';
import { normalize } from 'normalizr';
import config from 'src/config';
import { conj, omitNulls } from 'src/helpers';


class ApiResponseError {
  constructor(response) {
    this.response = response;
  }
}


const { API_URL } = config;


const parseAuth = ({ email, password }) => {
  const token = base64.encode(`${email}:${password}`);
  return `Basic ${token}`;
};


const parseConf = ({
  url,
  method,
  data = null,
  auth = null,
  schema = null,
  headers = {},
}) => ({
  url: API_URL + url,

  schema,

  conf: omitNulls({
    method,

    headers: omitNulls(conj(headers, {
      'Content-Type': !isNull(data)
        ? 'application/json'
        : null,

      Authorization: !isNull(auth)
        ? parseAuth(auth)
        : null,
    })),

    data: !isNull(data)
      ? JSON.stringify(data)
      : null,
  }),
});


const requestSuccess = (res, schema) => res.json()
  .then(({ result }) => !isNull(schema)
    ? normalize(result, schema)
    : result);


const requestFailure = res => Promise.reject(new ApiResponseError(res));


const request = rawConf => {
  const { url, schema, conf } = parseConf(rawConf);

  return fetch(url, conf)
    .then(res => res.ok
      ? requestSuccess(res, schema)
      : requestFailure(res));
};


export default request;
export { ApiResponseError };
