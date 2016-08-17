jest.mock('src/api/profiles');

import { capture } from 'scripts/helpers';
import { fakeContext } from 'scripts/helpers';
import { noop } from 'lodash';
import * as api from 'src/api';

import {
  fetchProfile,
  updateProfile,
  uploadProfileImage,
} from 'src/profile/actions';

import {
  PROFILE_FETCH_REQUEST,
  PROFILE_FETCH_SUCCESS,
  PROFILE_FETCH_FAILURE,

  PROFILE_UPDATE_REQUEST,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_FAILURE,

  PROFILE_IMAGE_UPDATE_REQUEST,
  PROFILE_IMAGE_UPDATE_SUCCESS,
  PROFILE_IMAGE_UPDATE_FAILURE,
} from 'src/profile/constants';

const { ApiResponseError } = api;


describe('profile/actions', () => {
  describe('fetchProfile', () => {
    beforeEach(() => {
      api.getProfile.mockClear();
      api.getProfile.mockReturnValue(Promise.resolve({ result: 23 }));
    });

    it('should dispatch request', async () => {
      const [action] = await capture(fetchProfile(23), fakeContext());

      expect(action).toEqual({
        type: PROFILE_FETCH_REQUEST,
      });
    });

    it('should dispatch success for successful fetches', async () => {
      api.getProfile.mockReturnValue(Promise.resolve({ result: 23 }));

      const [_request, action] = await capture(fetchProfile(23), fakeContext());

      expect(action).toEqual({
        type: PROFILE_FETCH_SUCCESS,
        payload: { entities: { result: 23 } },
      });
    });

    it('should dispatch failure for failed fetches', async () => {
      api.getProfile.mockReturnValue(Promise.reject(new ApiResponseError('o_O')));

      const [_request, action] = await capture(fetchProfile(23), fakeContext());

      expect(action).toEqual({
        type: PROFILE_FETCH_FAILURE,
      });
    });

    it('should call api.getProfile() with the correct params', async () => {
      const ctx = fakeContext();
      const { auth } = ctx;

      await fetchProfile(23)(noop, ctx);
      expect(api.getProfile.mock.calls).toEqual([[23, auth]]);
    });
  });

  describe('updateProfile', () => {
    beforeEach(() => {
      api.updateProfile.mockClear();
      api.updateProfile.mockReturnValue(Promise.resolve(null));
    });

    it('should dispatch request', async () => {
      const ctx = fakeContext();
      const [action] = await capture(updateProfile(23, { fake: 'profile' }), ctx);

      expect(action).toEqual({
        type: PROFILE_UPDATE_REQUEST,
      });
    });

    it('should dispatch success for successful updates', async () => {
      api.updateProfile.mockReturnValue(Promise.resolve(null));

      const ctx = fakeContext();
      const [_request, action] = await capture(updateProfile(23, { fake: 'profile' }), ctx);

      expect(action).toEqual({
        type: PROFILE_UPDATE_SUCCESS,
      });
    });

    it('should dispatch failure for failed updates', async () => {
      api.updateProfile.mockReturnValue(Promise.reject(new ApiResponseError('o_O')));

      const ctx = fakeContext();
      const [_request, action] = await capture(updateProfile(23, { fake: 'profile' }), ctx);

      expect(action).toEqual({
        type: PROFILE_UPDATE_FAILURE,
      });
    });

    it('should call api.updateProfile() with the correct params', async () => {
      const ctx = fakeContext();
      const { auth } = ctx;

      await updateProfile(23, { fake: 'profile' })(noop, ctx);
      expect(api.updateProfile.mock.calls).toEqual([[23, { fake: 'profile' }, auth]]);
    });
  });

  describe('uploadProfileImage', () => {
    beforeEach(() => {
      api.uploadProfileImage.mockClear();
      api.uploadProfileImage.mockReturnValue(Promise.resolve(null));
    });

    it('should dispatch request', async () => {
      const ctx = fakeContext();
      const [action] = await capture(uploadProfileImage(23, 'foo.png'), ctx);

      expect(action).toEqual({
        type: PROFILE_IMAGE_UPDATE_REQUEST,
      });
    });

    it('should dispatch success for successful uploads', async () => {
      api.uploadProfileImage.mockReturnValue(Promise.resolve(null));

      const ctx = fakeContext();
      const [_request, action] = await capture(uploadProfileImage(23, 'foo.png'), ctx);

      expect(action).toEqual({
        type: PROFILE_IMAGE_UPDATE_SUCCESS,
      });
    });

    it('should dispatch failure for failed uploads', async () => {
      api.uploadProfileImage.mockReturnValue(Promise.reject(new ApiResponseError('o_O')));

      const ctx = fakeContext();
      const [_request, action] = await capture(uploadProfileImage(23, 'foo.png'), ctx);

      expect(action).toEqual({
        type: PROFILE_IMAGE_UPDATE_FAILURE,
      });
    });

    it('should call api.uploadProfileImage() with the correct params', async () => {
      const ctx = fakeContext();
      const { auth } = ctx;

      await uploadProfileImage(23, 'foo.png')(noop, ctx);
      expect(api.uploadProfileImage.mock.calls).toEqual([[23, 'foo.png', auth]]);
    });
  });
});
