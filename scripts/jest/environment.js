/* eslint-disable no-undef */
jest.unmock('isomorphic-fetch');
jest.unmock('nock');

import 'isomorphic-fetch';
import nock from 'nock';

global.nock = nock;
