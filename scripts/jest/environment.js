import { castArray } from 'lodash';
import { PropTypes } from 'react';
import ReactInjection from 'react/lib/ReactInjection';

import 'isomorphic-fetch';
import config from 'src/config';
import FormData from 'react-native/Libraries/Network/FormData';

import 'react-native';

// github.com/facebook/jest/issues/1384
jest.mock('TextInput', () => 'TextInput');
jest.mock('ScrollView', () => 'ScrollView');

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

// TODO investigate whether this has been fixed (at the time of writing, there
// no github issues for this could be found. This should be an array:
// https://github.com/facebook/react-native/blob/master/Libraries/Components/Touchable/TouchableWithoutFeedback.js#L42
const { oneOf } = PropTypes;
PropTypes.oneOf = (v, ...args) => oneOf(castArray(v), ...args);


// https://github.com/facebook/react/issues/7386
ReactInjection.Component.injectEnvironment = () => null;


global.shallow = (...args) => {
  const { shallow } = require('enzyme');
  return shallow(...args);
};


global.render = (...args) => {
  const { create: render } = require('react-test-renderer');
  return render(...args);
};
