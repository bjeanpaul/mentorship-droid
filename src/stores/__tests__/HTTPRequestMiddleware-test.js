/* eslint-disable no-undef */

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
  // copy of successAction; with some additional things.
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

  it('should allow authorization headers to be disabled', (done) => {
    nock.cleanAll();
    nock('http://example.org', { badheaders: ['authorization'] })
      .get('/pass/')
      .reply(200, {});

    const noAuthAction = Object.assign(
      {},
      successAction,
      {
        url: 'http://example.org/pass/',
        requestOpts: {
          disableAuthorizationHeader: true,
        },
      }
    );
    store.dispatch(noAuthAction).then(() => {
      done();
    });
  });

  it('shouldnt break when json is not returned', (done) => {
    nock.cleanAll();
    nock('http://example.org')
      .get('/pass/')
      .reply(200, '', {
        'Content-Type': 'text/plain; charset=utf-8',
      });

    store.dispatch(successAction).then(() => {
      done();
    });
  });
});
