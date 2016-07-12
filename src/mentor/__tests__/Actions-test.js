/* eslint-disable no-undef, padded-blocks */
jest.unmock('src/helpers/index');
jest.unmock('src/stores/HTTPRequestMiddleware');
jest.unmock('../Actions');
jest.unmock('../Constants');

jest.unmock('redux-mock-store');
jest.unmock('redux-thunk');

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import HTTPRequestMiddleware from 'src/stores/HTTPRequestMiddleware';

import actionTypes from '../Constants';
import { login } from '../Actions';

const httpRequestMiddleware = new HTTPRequestMiddleware({
  getAuthorizationHeaderValue: (state) => state.user.auth.authToken,
});
const mockStore = configureMockStore([httpRequestMiddleware.apply, thunk]);


describe('actions', () => {

  const store = mockStore({ user: { auth: '' } });

  afterEach(() => {
    nock.cleanAll();
  });

  describe('login', () => {
    it('dispatches MENTOR_AUTH_TOKEN_SET before logging in', () => {
      store.dispatch(login('username', 'password'));
      expect(store.getActions()[0].type).toEqual(actionTypes.MENTOR_AUTH_TOKEN_SET);
      expect(store.getActions()[0].authToken).toEqual('dXNlcm5hbWU6cGFzc3dvcmQ=');
    });

    it('calls `onSuccess` when completed', (done) => {
      nock('http://example.org')
        .get('/mentor/')
          .reply(200, {});
      store.dispatch(login('username', 'password', () => {
        done();
      }));
    });
  });


  
});
