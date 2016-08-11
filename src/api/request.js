import base64 from 'base-64';
import { isNull } from 'lodash';
import { normalize } from 'normalizr';
import config from 'src/config';
import { conj, omitNulls } from 'src/helpers';


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


const request = rawConf => {
  const { url, schema, conf } = parseConf(rawConf);

  return fetch(url, conf)
    .then(res => res.json())
    .then(({ result }) => !isNull(schema)
      ? normalize(result, schema)
      : result);
};


export default request;
