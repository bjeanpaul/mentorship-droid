import noop from 'lodash';
import contextMiddleware from 'src/store/contextMiddleware';
import { capture } from 'app/scripts/helpers';


describe('contextMiddleware', () => {
  it('should provide context to function actions', async () => {
    const middleware = contextMiddleware(({ foo }) => ({ foo }));

    const next = jest.fn();

    const getState = () => ({
      foo: 21,
      bar: 23,
    });

    const action = (dispatch, { foo }) => dispatch({ baz: foo });

    middleware({
      dispatch: noop,
      getState: noop,
    })(next)(action);

    const [[res]] = next.mock.calls;

    expect(await capture(res, getState))
      .toEqual([{ baz: 21 }]);
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
