jest.unmock('isomorphic-fetch');
jest.unmock('nock');
jest.unmock('base-64');
jest.unmock('lodash');
jest.unmock('normalizr');
jest.unmock('query-string');
jest.unmock('redux-mock-store');
jest.unmock('redux-thunk');
jest.unmock('src/configuration');
jest.unmock('src/helpers');
jest.unmock('src/config');

import 'isomorphic-fetch';
import nock from 'nock';
import config from 'src/config';

global.nock = nock;
global.__TEST__ = true;

// TODO don't use original `fetch` once we aren't using nock anymore
global.fetch = jest.fn(fetch);

config.API_URL = '/mentor-api';
