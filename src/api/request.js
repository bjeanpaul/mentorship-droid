import config from 'src/config';
import { conj, omitNulls } from 'src/helpers';

const parseConf = conf => omitNulls(conj(conf, {
  url: config.API_URL + conf.url,
}));


const request = rawConf => {
  const conf = parseConf(rawConf);

  return fetch(conf.url, conf)
    .then(res => res.json());
};


export default request;
