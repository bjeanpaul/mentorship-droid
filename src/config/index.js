import base from 'src/config/base';
import prdOrQa from 'react-native-config';

let dev;

try {
  dev = require('src/config/dev').default;
} catch (e) {
  dev = {};
}

const config = global.__DEV__
  ? dev
  : prdOrQa;


export default {
  ...base,
  ...config,
};
