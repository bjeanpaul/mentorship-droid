import { noop } from 'lodash';
import chainMiddleware from 'src/stores/chainMiddleware';
import { capture } from 'app/scripts/helpers';


describe('chainMiddleware', () => {
  it('should chain actions with mappings', async () => {
    const next = jest.fn();
    const target = () => dispatch => dispatch({ type: 'BAR' });
    const middleware = chainMiddleware({ FOO: target });

    await middleware({ dispatch: noop })(next)({ type: 'FOO' });

    const [[a], [b]] = next.mock.calls;

    expect(a).toEqual({ type: 'FOO' });
    expect(await capture(b)).toEqual([{ type: 'BAR' }]);
  });

  it('should support non-thunks', async () => {
    const next = jest.fn();
    const middleware = chainMiddleware({ FOO: () => ({ type: 'BAR' }) });

    await middleware({ dispatch: noop })(next)({ type: 'FOO' });

    const [[a], [b]] = next.mock.calls;

    expect(a).toEqual({ type: 'FOO' });
    expect(await capture(b)).toEqual([{ type: 'BAR' }]);
  });

  it('should pass on actions without mappings', async () => {
    const next = jest.fn();
    const middleware = chainMiddleware({ FOO: () => ({ type: 'BAR' }) });

    await middleware({ dispatch: noop })(next)({ type: 'BAZ' });
    expect(next.mock.calls).toEqual([[{ type: 'BAZ' }]]);
  });
});
