jest.mock('src/api/schedule');

import { noop } from 'lodash';
import * as constants from 'src/schedule/constants';
import * as api from 'src/api';

import {
  capture,
  fakeContext,
  fakeScheduledCallData,
  fakeScheduledCallListData,
} from 'app/scripts/helpers';

import {
  listScheduledCalls,
  createScheduledCall,
  fetchScheduledCall,
  updateScheduledCall,
  removeScheduledCall,
} from 'src/schedule/actions';

const { ApiResponseError } = api;


describe('schedule/actions', () => {
  describe('listScheduledCalls', () => {
    beforeEach(() => {
      api.listScheduledCalls.mockClear();

      api.listScheduledCalls.mockReturnValue(
        Promise.resolve(fakeScheduledCallListData()));
    });

    it('should dispatch request', async () => {
      const [action] = await capture(listScheduledCalls(), fakeContext());

      expect(action).toEqual({
        type: constants.SCHEDULED_CALL_LIST_REQUEST,
      });
    });

    it('should dispatch success for successful listes', async () => {
      const data = fakeScheduledCallListData();
      api.listScheduledCalls.mockReturnValue(Promise.resolve(data));

      const [_request, action] = await capture(listScheduledCalls(), fakeContext());

      expect(action).toEqual({
        type: constants.SCHEDULED_CALL_LIST_SUCCESS,
        payload: data,
      });
    });

    it('should dispatch failure for failed listes', async () => {
      api.listScheduledCalls.mockReturnValue(Promise.reject(new ApiResponseError('o_O')));

      const [_request, action] = await capture(listScheduledCalls(), fakeContext());

      expect(action).toEqual({
        type: constants.SCHEDULED_CALL_LIST_FAILURE,
      });
    });

    it('should call api.listScheduledCalls() with the correct params', async () => {
      const ctx = fakeContext();
      const { auth } = ctx;

      await listScheduledCalls()(noop, ctx);
      expect(api.listScheduledCalls.mock.calls).toEqual([[auth]]);
    });
  });

  describe('createScheduledCall', () => {
    beforeEach(() => {
      api.createScheduledCall.mockClear();
      api.createScheduledCall.mockReturnValue(Promise.resolve(fakeScheduledCallData()));
    });

    it('should dispatch request', async () => {
      const data = fakeScheduledCallData();
      const [action] = await capture(createScheduledCall(23, data), fakeContext());

      expect(action).toEqual({
        type: constants.SCHEDULED_CALL_CREATE_REQUEST,
      });
    });

    it('should dispatch success for successful createes', async () => {
      const data = fakeScheduledCallData();
      api.createScheduledCall.mockReturnValue(Promise.resolve(data));

      const [_request, action] = await capture(createScheduledCall(23, data), fakeContext());

      expect(action).toEqual({
        type: constants.SCHEDULED_CALL_CREATE_SUCCESS,
        payload: data,
      });
    });

    it('should dispatch failure for failed createes', async () => {
      api.createScheduledCall.mockReturnValue(Promise.reject(new ApiResponseError('o_O')));

      const data = fakeScheduledCallData();
      const [_request, action] = await capture(createScheduledCall(23, data), fakeContext());

      expect(action).toEqual({
        type: constants.SCHEDULED_CALL_CREATE_FAILURE,
      });
    });

    it('should call api.createScheduledCall() with the correct params', async () => {
      const ctx = fakeContext();
      const { auth } = ctx;
      const data = fakeScheduledCallData();

      await createScheduledCall(23, data)(noop, ctx);
      expect(api.createScheduledCall.mock.calls).toEqual([[23, data, auth]]);
    });
  });

  describe('fetchScheduledCall', () => {
    beforeEach(() => {
      api.getScheduledCall.mockClear();
      api.getScheduledCall.mockReturnValue(Promise.resolve(fakeScheduledCallData()));
    });

    it('should dispatch request', async () => {
      const [action] = await capture(fetchScheduledCall(23), fakeContext());

      expect(action).toEqual({
        type: constants.SCHEDULED_CALL_FETCH_REQUEST,
      });
    });

    it('should dispatch success for successful fetches', async () => {
      const data = fakeScheduledCallData();
      api.getScheduledCall.mockReturnValue(Promise.resolve(data));

      const [_request, action] = await capture(fetchScheduledCall(23), fakeContext());

      expect(action).toEqual({
        type: constants.SCHEDULED_CALL_FETCH_SUCCESS,
        payload: data,
      });
    });

    it('should dispatch failure for failed fetches', async () => {
      api.getScheduledCall.mockReturnValue(Promise.reject(new ApiResponseError('o_O')));

      const [_request, action] = await capture(fetchScheduledCall(23), fakeContext());

      expect(action).toEqual({
        type: constants.SCHEDULED_CALL_FETCH_FAILURE,
      });
    });

    it('should call api.getScheduledCall() with the correct params', async () => {
      const ctx = fakeContext();
      const { auth } = ctx;

      await fetchScheduledCall(23)(noop, ctx);
      expect(api.getScheduledCall.mock.calls).toEqual([[23, auth]]);
    });
  });

  describe('updateScheduledCall', () => {
    beforeEach(() => {
      api.updateScheduledCall.mockClear();
      api.updateScheduledCall.mockReturnValue(Promise.resolve(null));
    });

    it('should dispatch request', async () => {
      const ctx = fakeContext();
      const [action] = await capture(updateScheduledCall(23, fakeScheduledCallData()), ctx);

      expect(action).toEqual({
        type: constants.SCHEDULED_CALL_UPDATE_REQUEST,
      });
    });

    it('should dispatch success for successful updates', async () => {
      api.updateScheduledCall.mockReturnValue(Promise.resolve(null));

      const ctx = fakeContext();
      const [_request, action] = await capture(
        updateScheduledCall(23, fakeScheduledCallData()), ctx);

      expect(action).toEqual({
        type: constants.SCHEDULED_CALL_UPDATE_SUCCESS,
      });
    });

    it('should dispatch failure for failed updates', async () => {
      api.updateScheduledCall.mockReturnValue(Promise.reject(new ApiResponseError('o_O')));

      const ctx = fakeContext();
      const [_request, action] = await capture(
        updateScheduledCall(23, fakeScheduledCallData()), ctx);

      expect(action).toEqual({
        type: constants.SCHEDULED_CALL_UPDATE_FAILURE,
      });
    });

    it('should call api.updateScheduledCall() with the correct params', async () => {
      const ctx = fakeContext();
      const { auth } = ctx;

      await updateScheduledCall(23, fakeScheduledCallData())(noop, ctx);

      expect(api.updateScheduledCall.mock.calls).toEqual([[
        23, fakeScheduledCallData(), auth
      ]]);
    });
  });

  describe('removeScheduledCall', () => {
    beforeEach(() => {
      api.removeScheduledCall.mockClear();
      api.removeScheduledCall.mockReturnValue(Promise.resolve(null));
    });

    it('should dispatch request', async () => {
      const ctx = fakeContext();
      const [action] = await capture(removeScheduledCall(23), ctx);

      expect(action).toEqual({
        type: constants.SCHEDULED_CALL_REMOVE_REQUEST,
      });
    });

    it('should dispatch success for successful removes', async () => {
      api.removeScheduledCall.mockReturnValue(Promise.resolve(null));

      const ctx = fakeContext();
      const [_request, action] = await capture(removeScheduledCall(23), ctx);

      expect(action).toEqual({
        type: constants.SCHEDULED_CALL_REMOVE_SUCCESS,
      });
    });

    it('should dispatch failure for failed removes', async () => {
      api.removeScheduledCall.mockReturnValue(Promise.reject(new ApiResponseError('o_O')));

      const ctx = fakeContext();
      const [_request, action] = await capture(removeScheduledCall(23), ctx);

      expect(action).toEqual({
        type: constants.SCHEDULED_CALL_REMOVE_FAILURE,
      });
    });

    it('should call api.removeScheduledCall() with the correct params', async () => {
      const ctx = fakeContext();
      const { auth } = ctx;

      await removeScheduledCall(23)(noop, ctx);
      expect(api.removeScheduledCall.mock.calls).toEqual([[23, auth]]);
    });
  });
});
