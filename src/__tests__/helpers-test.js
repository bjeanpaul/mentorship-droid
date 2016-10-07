import { mock } from 'app/scripts/helpers';
import { identity, noop } from 'lodash';

import {
  dataStatus,
  staticStatus,
  switchError,
  makeGradient,
  errorSink,
} from 'src/helpers';


describe('helpers', () => {
  describe('staticStatus', () => {
    it('should create actions of the given type', () => {
      expect(staticStatus('FOO')()).toEqual({ type: 'FOO' });
    });
  });

  describe('dataStatus', () => {
    it('should create actions of the given type and dataStatus', () => {
      expect(dataStatus('FOO')({ bar: 23 })).toEqual({
        type: 'FOO',
        details: { bar: 23 },
      });
    });
  });

  describe('makeGradient', () => {
    it('should generate colors from a start and finish range for n steps', () => {
      const g = makeGradient('#C4CD39', '#00AA9F', 10);
      expect(g.length).toBe(10);
      expect(g[0]).toEqual('#C4CD39');
      expect(g[9]).toEqual('#00AA9F');
    });

    it('should use the start color only if n === 1', () => {
      expect(makeGradient('#C4CD39', '#00AA9F', 1)).toEqual(['#C4CD39']);
    });
  });

  describe('switchError', () => {
    it('should call the first function corresponding to a matching type', async () => {
      class A {}
      class B {}
      const e = new A();
      const [handler1, handler2, handler3] = [mock(), mock(), mock()];

      const fn = switchError([
        [A, handler1],
        [B, handler2],
        [A, handler3],
      ]);

      expect(await fn(e, 21)).toEqual(handler1(e, 21));
    });

    it('should reject the error if no matches are found', async () => {
      class A {}
      class B {}
      const e = new B();
      const fn = switchError([[A, noop]]);
      expect(await fn(e).then(noop, identity)).toEqual(e);
    });
  });

  describe('errorSink', () => {
    it('should dispatch errors with action mappings', async () => {
      class A {}
      class B {}
      const a = new A();
      const b = new B();
      a.message = 'o_O';

      const dispatch = jest.fn();
      const sink = errorSink({ dispatch }, [[A, e => `${e.message}!`]], noop);

      await sink(b);
      expect(dispatch.mock.calls).toEqual([]);

      await sink(a);
      expect(dispatch.mock.calls).toEqual([['o_O!']]);
    });

    it('should call the fallback handler for unmapped errors', async () => {
      class A {}
      class B {}
      const a = new A();
      const b = new B();

      const fallback = jest.fn();
      const sink = errorSink({ dispatch: noop }, [[A, noop]], fallback);

      await sink(a);
      expect(fallback.mock.calls).toEqual([]);

      await sink(b);
      expect(fallback.mock.calls).toEqual([[a]]);
    });

    it('should call the fallback handler for errors occuring while dispatching', async () => {
      class A {}
      const e = new Error();

      const fallback = jest.fn();
      const badAction = () => Promise.reject(e);
      const dispatch = action => action();
      const sink = errorSink({ dispatch }, [[A, badAction]], fallback);

      await sink(new A());
      expect(fallback.mock.calls).toEqual([[e]]);
    });
  });
});
