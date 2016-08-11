import config from 'src/config';
import { conj, omitNulls } from 'src/helpers';

const parseConf = conf => omitNulls(conj(conf, {
  url: config.API_URL + conf.url,
  headers: omitNulls(conj(conf.headers || {}, {
    'Content-Type': conf.data
      ? 'application/json'
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
