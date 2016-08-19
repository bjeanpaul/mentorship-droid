import reactNative from 'react-native-mock';
import 'isomorphic-fetch';
import nock from 'nock';
import config from 'src/config';
import FormData from 'react-native/Libraries/Network/FormData';
import { mock } from 'app/scripts/helpers';

// automocking doesn't seem to work for axios
jest.setMock('axios', jest.fn());

jest.setMock('react-native', reactNative);

// use react-native's FormData implementation, jsdom's implementation expects
// form data values to only be strings
global.FormData = FormData;

global.mock = mock;

global.nock = nock;

config.API_URL = '/mentor-api';
