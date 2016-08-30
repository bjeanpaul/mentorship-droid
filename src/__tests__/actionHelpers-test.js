import { identity, noop } from 'lodash';

import {
  apiAction,
  staticAction,
  dataAction,
  castThunk,
} from 'src/actionHelpers';

import { mock, capture, fakeContext } from 'app/scripts/helpers';

describe('actionHelpers', () => {
  describe('apiAction', () => {
    it('should dispatch request actions', async () => {
      const request = mock();

      const fn = apiAction({
        method: identity,
        request,
        success: noop,
        failure: noop,
      });

      const [action] = await capture(fn(21, 23), fakeContext());
      expect(action).toEqual(request(21, 23));
    });

    it('should dispatch success actions for successful fetches', async () => {
      const success = mock();

      const fn = apiAction({
        method: v => v + 1,
        request: noop,
        success,
        failure: noop,
      });

      const [_request, action] = await capture(fn(21, 23), fakeContext());
      expect(action).toEqual(success(22, 21, 23));
    });

    it('should dispatch failure actions for failed fetches', async () => {
      class A {}
      class B {}

      const [handler1, handler2, handler3] = [mock(), mock(), mock()];
      const e = new A();

      const fn = apiAction({
        method: () => Promise.reject(e),
        request: noop,
        success: noop,
        failures: [
          [A, handler1],
          [B, handler2],
          [A, handler3],
        ],
      });

      const [_request, action] = await capture(fn(21, 23), fakeContext());
      expect(action).toEqual(handler1(e, 21, 23));
    });

    it('should reject unhandled failures', async () => {
      class A {}
      class B {}

      const e = new B();

      const fn = apiAction({
        method: () => Promise.reject(e),
        request: noop,
        success: noop,
        failures: [[A, noop]],
      });

      const err = await capture(fn(21, 23), fakeContext()).then(noop, identity);
      expect(err).toEqual(e);
    });

    it('should call the api method with the correct params', async () => {
      const ctx = fakeContext();
      const { auth } = ctx;
      const method = jest.fn();

      const fn = apiAction({
        method,
        request: noop,
        success: noop,
        failure: noop,
      });

      await capture(fn(21, 23), ctx);
      expect(method.mock.calls).toEqual([[21, 23, auth]]);
    });
  });

  describe('staticAction', () => {
    it('should create actions of the given type', () => {
      expect(staticAction('FOO')()).toEqual({ type: 'FOO' });
    });
  });

  describe('dataAction', () => {
    it('should create actions of the given type and data', () => {
      expect(dataAction('FOO')({ bar: 23 })).toEqual({
        type: 'FOO',
        payload: { bar: 23 },
      });
    });
  });

  describe('castThunk', () => {
    it('should cast non-thunks to thunks', async () => {
      expect(await capture(castThunk(() => 23)()))
        .toEqual([23]);
    });

    it('should be a no-op wrapper for thunks', async () => {
      expect(await capture(castThunk(() => dispatch => dispatch(23))()))
        .toEqual([23]);
    });
  });
});
