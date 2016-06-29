// /* eslint-disable no-undef */
// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import nock from 'nock';
//
// jest.unmock('../RemoteOperationMiddleware.js');
//
// const mockStore = configureMockStore([RemoteOperationMiddleware, thunk]);
//
// describe('RemoteOperationMiddleware', () => {
//
//
//
//
//   const store = mockStore({ user: { auth: { authToken: 'XXXsecretXXX' } } });
//   const successAction = {
//     types: ['request', 'success', 'failure'],
//     request: new Request('http://example.org/test/'),
//     payload: {
//       example: 'I am an example payload.',
//     },
//   };
//
//   const failureAction = Object.assign(
//     {},
//     successAction,
//     { request: new Request('http://example.org/die/') }
//   );
//
//   beforeEach(() => {
//     nock('http://example.org')
//     .get('/success/')
//       .reply(200, {})
//     .get('/failure/')
//       .reply(404, {});
//   });
//
//
//
//
// });
