import reactNative from 'react-native-mock';
import 'isomorphic-fetch';
import config from 'src/config';
import FormData from 'react-native/Libraries/Network/FormData';

// automocking doesn't seem to work for axios
jest.setMock('axios', jest.fn());

jest.setMock('react-native', reactNative);

// use react-native's FormData implementation, jsdom's implementation expects
// form data values to only be strings
global.FormData = FormData;


config.API_URL = '/mentor-api';


global.mock = (...args) => {
  // TODO invesitage why importing helpers in this module seems to make jest unhappy
  const { mock } = require('app/scripts/helpers');
  return mock(...args);
};
