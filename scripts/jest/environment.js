/* eslint-disable no-undef */
jest.unmock('isomorphic-fetch');
jest.unmock('nock');
jest.unmock('base-64');
jest.unmock('lodash');
jest.unmock('normalizr');
jest.unmock('redux-mock-store');
jest.unmock('redux-thunk');

import 'isomorphic-fetch';
import nock from 'nock';

global.nock = nock;
global.__TEST__ = true;
