jest
  .unmock('src/stores/contextMiddleware');

import contextMiddleware from 'src/stores/contextMiddleware';


describe('contextMiddleware', () => {
  it('should provide context to function actions', () => {
    const middleware = contextMiddleware(({ foo }) => ({ foo }));

    const getState = () => ({
      foo: 21,
      bar: 23,
    });

    const dispatch = () => null;
    const next = () => null;
    const action = jest.fn();

    middleware(dispatch, getState)(next)(action);

    expect(action.mock.calls).toEqual([[
      dispatch,
      { foo: 21 },
      getState,
    ]]);
  });

  it('should pass on non-function actions', () => {
    const middleware = contextMiddleware(({ foo }) => ({ foo }));

    const getState = () => ({
      foo: 21,
      bar: 23,
    });

    const dispatch = () => null;
    const next = jest.fn();

    middleware(dispatch, getState)(next)(23);
    expect(next.mock.calls).toEqual([[23]]);
  });
});
