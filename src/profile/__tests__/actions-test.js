jest.mock('src/api/profiles');

import { capture } from 'scripts/helpers';
import { fakeContext, fakeProfileData } from 'scripts/helpers';
import { noop } from 'lodash';
import * as constants from 'src/profile/constants';
import * as api from 'src/api';

import {
  fetchProfile,
  updateProfile,
  uploadProfileImage,
} from 'src/profile/actions';

const { ApiResponseError } = api;


describe('profile/actions', () => {
  describe('fetchProfile', () => {
    beforeEach(() => {
      api.getProfile.mockClear();
      api.getProfile.mockReturnValue(Promise.resolve(fakeProfileData()));
    });

    it('should dispatch request', async () => {
      const [action] = await capture(fetchProfile(23), fakeContext());

      expect(action).toEqual({
        type: constants.PROFILE_FETCH_REQUEST,
      });
    });

    it('should dispatch success for successful fetches', async () => {
      const data = fakeProfileData();
      api.getProfile.mockReturnValue(Promise.resolve(data));

      const [_request, action] = await capture(fetchProfile(23), fakeContext());

      expect(action).toEqual({
        type: constants.PROFILE_FETCH_SUCCESS,
        payload: data,
      });
    });

    it('should dispatch failure for failed fetches', async () => {
      api.getProfile.mockReturnValue(Promise.reject(new ApiResponseError('o_O')));

      const [_request, action] = await capture(fetchProfile(23), fakeContext());

      expect(action).toEqual({
        type: constants.PROFILE_FETCH_FAILURE,
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
      const [action] = await capture(updateProfile(23, fakeProfileData()), ctx);

      expect(action).toEqual({
        type: constants.PROFILE_UPDATE_REQUEST,
      });
    });

    it('should dispatch success for successful updates', async () => {
      api.updateProfile.mockReturnValue(Promise.resolve(null));

      const ctx = fakeContext();
      const [_request, action] = await capture(updateProfile(23, fakeProfileData()), ctx);

      expect(action).toEqual({
        type: constants.PROFILE_UPDATE_SUCCESS,
      });
    });

    it('should dispatch failure for failed updates', async () => {
      api.updateProfile.mockReturnValue(Promise.reject(new ApiResponseError('o_O')));

      const ctx = fakeContext();
      const [_request, action] = await capture(updateProfile(23, fakeProfileData()), ctx);

      expect(action).toEqual({
        type: constants.PROFILE_UPDATE_FAILURE,
      });
    });

    it('should call api.updateProfile() with the correct params', async () => {
      const ctx = fakeContext();
      const { auth } = ctx;

      await updateProfile(23, fakeProfileData())(noop, ctx);
      expect(api.updateProfile.mock.calls).toEqual([[23, fakeProfileData(), auth]]);
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
        type: constants.PROFILE_IMAGE_UPDATE_REQUEST,
      });
    });

    it('should dispatch success for successful uploads', async () => {
      api.uploadProfileImage.mockReturnValue(Promise.resolve(null));

      const ctx = fakeContext();
      const [_request, action] = await capture(uploadProfileImage(23, 'foo.png'), ctx);

      expect(action).toEqual({
        type: constants.PROFILE_IMAGE_UPDATE_SUCCESS,
      });
    });

    it('should dispatch failure for failed uploads', async () => {
      api.uploadProfileImage.mockReturnValue(Promise.reject(new ApiResponseError('o_O')));

      const ctx = fakeContext();
      const [_request, action] = await capture(uploadProfileImage(23, 'foo.png'), ctx);

      expect(action).toEqual({
        type: constants.PROFILE_IMAGE_UPDATE_FAILURE,
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
