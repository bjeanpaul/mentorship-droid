const base = require('src/config/base');
const test = require('src/config/test');


let production;
let development;

try {
  production = require('src/config/production');
} catch (e) {
  production = {};
}

try {
  development = require('src/config/development');
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
