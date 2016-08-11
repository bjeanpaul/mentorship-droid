import base64 from 'base-64';
import config from 'src/config';
import { conj, omitNulls } from 'src/helpers';

const parseAuth = ({ email, password }) => {
  const token = base64.encode(`${email}:${password}`);
  return `Basic ${token}`;
};

const parseConf = conf => omitNulls(conj(conf, {
  url: config.API_URL + conf.url,
  headers: omitNulls(conj(conf.headers || {}, {
    'Content-Type': conf.data
      ? 'application/json'
      : null,
    Authorization: conf.auth
      ? parseAuth(conf.auth)
      : null,
  })),
  data: conf.data
    ? JSON.stringify(conf.data)
    : null,
}));

const request = rawConf => {
  const conf = parseConf(rawConf);

  return fetch(conf.url, conf)
    .then(res => res.json());
};

export default request;
