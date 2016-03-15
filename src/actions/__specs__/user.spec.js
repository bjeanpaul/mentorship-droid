/* eslint-disable no-undef */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import * as actions from '../user';
import callAPIMiddlware from '../../stores/callAPIMiddleware';

const middlewares = [callAPIMiddlware, thunk];
const mockStore = configureMockStore(middlewares);


function testGeneratorForActionsThatInvokeCallAPIMiddleware(action, initialState = {}) {
  const store = mockStore(initialState);
  const [requestType, successType, failureType] = action.types;
  const url = action.request.url.replace('http://192.168.178.20:8000', '');

  afterEach(() => {
    store.clearActions();
    nock.cleanAll();
  });

  it(`dispatches ${successType} `, (done) => {
    nock('http://192.168.178.20:8000')
      .intercept(url, action.request.method)
        .reply(200, action.request.body || {});

    store.dispatch(action)
      .then(() => {
        expect(store.getActions()[0].type).toEqual(requestType);
        expect(store.getActions()[1].type).toEqual(successType);
        done();
      });
  });

  it(`dispatches ${failureType} `, (done) => {
    nock('http://192.168.178.20:8000')
      .intercept(url, action.request.method)
        .reply(404, action.request.body || {});

    store.dispatch(action)
      .then(() => {
        expect(store.getActions()[0].type).toEqual(requestType);
        expect(store.getActions()[1].type).toEqual(failureType);
        done();
      });
  });
}


describe('User action creators', () => {
  const authToken = 'YWRtaW46MTIz';
  const initialState = { auth: { authToken } };

  describe('profile', () => {
    testGeneratorForActionsThatInvokeCallAPIMiddleware(
      actions.fetchProfile(),
      initialState
    );

    testGeneratorForActionsThatInvokeCallAPIMiddleware(
      actions.updateProfile({ id: 1 }),
      initialState
    );
  });

  describe('login', () => {
    testGeneratorForActionsThatInvokeCallAPIMiddleware(
      actions.login('admin', '123'),
      initialState
    );
  });

  describe('reset password', () => {
    testGeneratorForActionsThatInvokeCallAPIMiddleware(
      actions.resetPassword('123'),
      initialState
    );
  });
});
