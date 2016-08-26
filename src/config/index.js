import base from 'src/config/base';
import test from 'src/config/test';


let production;
let development;

try {
  production = require('src/config/production').default;
} catch (e) {
  production = {};
}

try {
  development = require('src/config/development').default;
} catch (e) {
  development = {};
}

export default {
  ...base,
  ...{
    production,
    development,
    test,
  }[process.env.NODE_ENV || 'production'],
};
