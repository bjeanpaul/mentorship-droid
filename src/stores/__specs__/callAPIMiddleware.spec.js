/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import callAPIMiddlware from '../callAPIMiddleware';

const middlewares = [callAPIMiddlware, thunk];
const mockStore = configureMockStore(middlewares);


// TODO: test the `catch` statement; with a network error
describe('call api middleware', () => {
  const store = mockStore({ user: { auth: { authToken: 'XXXsecretXXX' } } });
  const successAction = {
    types: ['request', 'success', 'failure'],
    request: new Request('http://example.org/test/'),
    payload: {
      example: 'I am an example payload.',
    },
  };
  const failureAction = Object.assign(
    {},
    successAction,
    { request: new Request('http://example.org/die/') }
  );

  beforeEach(() => {
    nock('http://example.org')
    .get('/test/')
      .reply(200, {})
    .get('/die/')
      .reply(404, {});
  });

  afterEach(() => {
    store.clearActions();
    nock.cleanAll();
  });

  it('should add the authorization headers to the request from the store\'s authToken', (done) => {
    nock.cleanAll();
    nock('http://example.org', { reqheaders: { authorization: 'Basic XXXsecretXXX' } })
    .get('/test/')
      .reply(200, {});

    store.dispatch(successAction)
    .then(() => {
      done();
    });
  });

  describe('should pass the `payload` with the dispatched actions', () => {
    it('on `request`', () => {
      store.dispatch(successAction)
      .then(() => {
        expect(store.getActions()[0].example).toEqual('I am an example payload.');
        done();
      });
    });
    it('on `success`', () => {
      store.dispatch(successAction)
      .then(() => {
        expect(store.getActions()[1].example).toEqual('I am an example payload.');
        done();
      });
    });

    it('on `failure`', () => {
      store.dispatch(failureAction)
      .then(() => {
        expect(store.getActions()[1].example).toEqual('I am an example payload.');
        done();
      });
    });
  });

  describe('should call `onFulfilled` and `onRejected` callbacks.', () => {
    it('on `success`', (done) => {
      successAction.onFulfilled = () => {
        done();
      };
      store.dispatch(successAction);
    });

    it('on `failure`', (done) => {
      failureAction.onRejected = () => {
        done();
      };
      store.dispatch(failureAction);
    });
  });
});
