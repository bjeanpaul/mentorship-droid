/* eslint-disable no-undef */
jest.unmock('../actions');
jest.unmock('../constants');

jest.unmock('redux-mock-store');
jest.unmock('redux-thunk');

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';


import {
  AUTH_SET_TOKEN,
} from '../constants';

import { login } from '../actions';

const mockStore = configureMockStore([thunk]);

describe('actions', () => {
  const store = mockStore({ auth: {} });
  afterEach(() => {
    nock.cleanAll();
  });

  describe('login', () => {
    it('dispatches AUTH_SET_TOKEN before logging in', () => {
      store.dispatch(login('username', 'password'));
      expect(store.getActions()[0].type).toEqual(AUTH_SET_TOKEN);
    });

    it('generates a valid base64 encoded `username:password`', () => {
      store.dispatch(login('username', 'password'));
      expect(store.getActions()[0].authToken).toEqual('dXNlcm5hbWU6cGFzc3dvcmQ=');
    });

    it('calls `onSuccess` when completed', (done) => {
      nock('http://example.org')
      .get('/profile/?email=username')
      .reply(200, {
        results: [
          { name: 'Rodger' },
        ],
      });

      store.dispatch(login('username', 'password', () => {
        done();
      }));
    });
  });
});
