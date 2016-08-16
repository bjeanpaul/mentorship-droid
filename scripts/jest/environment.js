import reactNative from 'react-native-mock';
import nock from 'nock';
import config from 'src/config';

// automocking doesn't seem to work for axios
jest.setMock('axios', jest.fn());

jest.setMock('react-native', reactNative);

global.nock = nock;

config.API_URL = '/mentor-api';
