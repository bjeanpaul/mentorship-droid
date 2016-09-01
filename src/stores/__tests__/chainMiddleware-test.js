import { noop } from 'lodash';
import chainMiddleware from 'src/stores/chainMiddleware';
import { capture } from 'app/scripts/helpers';

describe('chainMiddleware', () => {
  it('should chain actions with mappings', async () => {
    const next = jest.fn();
    const target = () => dispatch => dispatch({ type: 'BAR' });
    const middleware = chainMiddleware({ FOO: target });

    middleware({ dispatch: noop })(next)({ type: 'FOO' });

    const [[res]] = next.mock.calls;

    expect(await capture(res()))
      .toEqual([{ type: 'FOO' }, { type: 'BAR' }]);
  });

  it('should support non-thunks', async () => {
    const next = jest.fn();
    const middleware = chainMiddleware({ FOO: () => ({ type: 'BAR' }) });

    middleware({ dispatch: noop })(next)({ type: 'FOO' });

    const [[res]] = next.mock.calls;

    expect(await capture(res()))
      .toEqual([{ type: 'FOO' }, { type: 'BAR' }]);
  });

  it('should pass on actions without mappings', async () => {
    const next = jest.fn();
    const middleware = chainMiddleware({ FOO: () => ({ type: 'BAR' }) });

    middleware({ dispatch: noop })(next)({ type: 'BAZ' });
    expect(next.mock.calls).toEqual([[{ type: 'BAZ' }]]);
  });
});
