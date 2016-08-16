import reactNative from 'react-native-mock';
import 'isomorphic-fetch';
import nock from 'nock';
import config from 'src/config';

jest.setMock('react-native', reactNative);

global.nock = nock;

// TODO don't use original `fetch` once we aren't using nock anymore
global.fetch = jest.fn(fetch);

config.API_URL = '/mentor-api';
