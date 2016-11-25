import chainMiddleware from 'src/store/chainMiddleware';
import { capture } from 'app/scripts/helpers';


describe('chainMiddleware', () => {
  it('should chain actions with mappings', async () => {
    const next = jest.fn();
    const dispatch = jest.fn();
    const target = () => dispatchFn => dispatchFn({ type: 'BAR' });

    const middleware = chainMiddleware({ FOO: target });
    await middleware({ dispatch })(next)({ type: 'FOO' });

    expect(next.mock.calls).toEqual([[{ type: 'FOO' }]]);
    expect(dispatch.mock.calls.length).toEqual(1);

    const [[chained]] = dispatch.mock.calls;
    expect(await capture(chained)).toEqual([{ type: 'BAR' }]);
  });

  it('should support non-thunks', async () => {
    const next = jest.fn();
    const dispatch = jest.fn();

    const middleware = chainMiddleware({ FOO: () => ({ type: 'BAR' }) });
    await middleware({ dispatch })(next)({ type: 'FOO' });

    expect(next.mock.calls).toEqual([[{ type: 'FOO' }]]);
    expect(dispatch.mock.calls.length).toEqual(1);

    const [[chained]] = dispatch.mock.calls;
    expect(await capture(chained)).toEqual([{ type: 'BAR' }]);
  });

  it('should pass on actions without mappings', async () => {
    const next = jest.fn();
    const dispatch = jest.fn();
    const middleware = chainMiddleware({ FOO: () => ({ type: 'BAR' }) });

    await middleware({ dispatch })(next)({ type: 'BAZ' });
    expect(next.mock.calls).toEqual([[{ type: 'BAZ' }]]);
    expect(dispatch.mock.calls).toEqual([]);
  });
});
