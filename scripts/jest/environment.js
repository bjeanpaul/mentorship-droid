import 'isomorphic-fetch';
import config from 'src/config';
import FormData from 'react-native/Libraries/Network/FormData';

// order matters here
import 'react-native';
import { create as render } from 'react-test-renderer';

global.render = render;

// github.com/facebook/jest/issues/1384
jest.mock('TextInput', () => 'TextInput');

// automocking doesn't seem to work for axios
jest.setMock('axios', jest.fn());

// use react-native's FormData implementation, jsdom's implementation expects
// form data values to only be strings
global.FormData = FormData;

config.API_URL = '/mentor-api';

global.mock = (...args) => {
  // TODO invesitage why importing helpers in this module seems to make jest unhappy
  const { mock } = require('app/scripts/helpers');
  return mock(...args);
};

// https://github.com/facebook/react/issues/7386
global.shallow = (...args) => {
  const { shallow } = require('enzyme');
  return shallow(...args);
};
