import { identity, noop } from 'lodash';
import immediate from 'immediate-promise';
import defer from 'promise-defer';

import { mock, capture, fakeContext } from 'app/scripts/helpers';

import {
  apiAction,
  staticAction,
  dataAction,
  castThunk,
  sequence,
  tickAction,
} from 'src/actionHelpers';


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

  describe('sequence', () => {
    it('should wrap non-thunks', async () => {
      expect(await capture(sequence([() => 21, () => 23])()))
        .toEqual([21, 23]);
    });

    it('should run the given action creators sequentially', async () => {
      const res = [];

      const d1 = defer();
      const d2 = defer();
      const d3 = defer();

      const a1 = (...args) => (dispatch, ...storeArgs) => d1.promise
        .then(() => ['a1', ...args, ...storeArgs])
        .then(dispatch);

      const a2 = (...args) => (dispatch, ...storeArgs) => d2.promise
        .then(() => ['a2', ...args, ...storeArgs])
        .then(dispatch);

      const a3 = (...args) => (dispatch, ...storeArgs) => d3.promise
        .then(() => ['a3', ...args, ...storeArgs])
        .then(dispatch);

      const seq = sequence([a1, a2, a3]);

      seq(21, 23)((...args) => res.push(...args), 2, 3);

      expect(res).toEqual([]);

      d2.resolve();
      await d2.promise;

      expect(res).toEqual([]);

      d1.resolve();
      await d1.promise;
      await immediate();

      expect(res).toEqual([
        ['a1', 21, 23, 2, 3],
        ['a2', 21, 23, 2, 3],
      ]);

      d3.resolve();
      await immediate();

      expect(res).toEqual([
        ['a1', 21, 23, 2, 3],
        ['a2', 21, 23, 2, 3],
        ['a3', 21, 23, 2, 3],
      ]);
    });
  });

  describe('tickAction', () => {
    jest.useFakeTimers();

    it('should dispatch a tick action each interval', () => {
      const dispatch = jest.fn();
      tickAction(21, 'FOO')()(dispatch);

      expect(dispatch.mock.calls).toEqual([]);

      jest.runTimersToTime(21);

      expect(dispatch.mock.calls).toEqual([[{
        type: 'FOO',
      }]]);

      jest.runTimersToTime(21);

      expect(dispatch.mock.calls).toEqual([[{
        type: 'FOO',
      }], [{
        type: 'FOO',
      }]]);
    });
  });
});
