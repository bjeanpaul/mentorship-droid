import base from 'src/config/base';


let dev;

try {
  dev = require('src/config/dev').default;
} catch (e) {
  dev = {};
}


const config = !global.__DEV__
  ? require('react-native-config').default
  : dev;


export default {
  ...base,
  ...config,
};
