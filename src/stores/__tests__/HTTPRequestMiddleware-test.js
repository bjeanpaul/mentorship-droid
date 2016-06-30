/* eslint-disable no-undef */
jest.unmock('../HTTPRequestMiddleware');
jest.unmock('redux-mock-store');
jest.unmock('redux-thunk');


import HTTPRequestMiddleware from '../HTTPRequestMiddleware';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const httpRequestMiddleware = new HTTPRequestMiddleware({
  getAuthorizationHeaderValue: (state) => state.user.auth.authToken,
});

const mockStore = configureMockStore([httpRequestMiddleware.apply, thunk]);

describe('RemoteOperationMiddleware', () => {

  const store = mockStore({ user: { auth: { authToken: 'XXXsecretXXX' } } });
  const successAction = {
    types: ['request', 'success', 'failure'],
    url: 'http://example.org/pass/',
    payload: {
      example: 'I am an example payload.',
    },
  };
  const failureAction = Object.assign(
    {},
    successAction,
    { url: 'http://example.org/fail/' }
  );

  beforeEach(() => {
    nock('http://example.org')
      .get('/pass/')
        .reply(200, {})
      .get('/fail/')
        .reply(404, {});
  });

  afterEach(() => {
    store.clearActions();
    nock.cleanAll();
  });


  it('should return the authorization header from the store', (done) => {
    nock.cleanAll();
    nock('http://example.org', { reqheaders: { authorization: 'Basic XXXsecretXXX' } })
      .get('/pass/')
      .reply(200, {});

    store.dispatch(successAction).then(() => {
      done();
    });
  });

  describe('should pass the `payload` with the dispatched actions', () => {
    it('on `request`', (done) => {
      store.dispatch(successAction)
        .then(() => {
          expect(store.getActions()[0].example).toEqual('I am an example payload.');
          done();
        });
    });
    it('on `success`', (done) => {
      store.dispatch(successAction)
        .then(() => {
          expect(store.getActions()[1].example).toEqual('I am an example payload.');
          done();
        });
    });

    it('on `failure`', (done) => {
      store.dispatch(failureAction)
        .then(() => {
          expect(store.getActions()[1].example).toEqual('I am an example payload.');
          done();
        });
    });
  });

  describe('should call `onSuccess` and `onFailure` callbacks.', () => {
    it('on `success`', (done) => {
      successAction.onSuccess = () => {
        done();
      };
      store.dispatch(successAction);
    });

    it('on `failure`', (done) => {
      failureAction.onFailure = () => {
        done();
      };
      store.dispatch(failureAction);
    });
  });
});
