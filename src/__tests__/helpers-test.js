import { mock } from 'app/scripts/helpers';
import { identity, noop } from 'lodash';

import {
  dataStatus,
  staticStatus,
  switchError,
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
});
