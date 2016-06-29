/* eslint-disable no-undef */
jest.unmock('../RemoteOperationMiddleware');
jest.unmock('redux-mock-store');
jest.unmock('redux-thunk');


import RemoteOperationMiddleware from '../RemoteOperationMiddleware';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';



const httpRequestMiddleware = new RemoteOperationMiddleware({
  getAuthorizationHeaderValue: (state) => {
    return state.user.auth.authToken;
  },
});

const mockStore = configureMockStore([httpRequestMiddleware.apply, thunk]);

describe('RemoteOperationMiddleware', () => {

  const store = mockStore({ user: { auth: { authToken: 'XXXsecretXXX' } } });
  const successAction = {
    types: ['request', 'success', 'failure'],
    request: {
      url: 'http://example.org/pass/'
    },
    payload: {
      example: 'I am an example payload.',
    },
  };
  const failureAction = Object.assign(
    {},
    successAction,
    { request: new Request('http://example.org/die/') }
  );

  // beforeEach(() => {
  //   nock('http://example.org')
  //     .get('/pass/')
  //       .reply(200, {})
  //     .get('/fail/')
  //       .reply(404, {});
  // });

  afterEach(() => {
    store.clearActions();
    nock.cleanAll();
  });


// it should return the authorization header from the store.

  it('should return the authorization header from the store', (done) => {
    nock('http://example.org', { reqheaders: { authorization: 'Basic XXXsecretXXX' } })
      .get('/pass/')
      .reply(200, {});

    store.dispatch(successAction).then(() => {
      done();
    });
  });

});
