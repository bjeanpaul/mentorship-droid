jest.mock('src/actionHelpers', () => ({
  apiAction: global.mock(),
  staticAction: global.mock(),
  dataAction: global.mock(),
}));

import * as constants from 'src/constants/profile';
import * as api from 'src/api';

import {
  apiAction,
  staticAction,
  dataAction,
} from 'src/actionHelpers';

import {
  fetchProfile,
  updateProfile,
  updateProfilePicture,
} from 'src/actions/profile';

const { ApiResponseError } = api;


describe('profile/actions', () => {
  describe('fetchProfile', () => {
    it('should create actions for profile api fetches', () => {
      expect(fetchProfile).toEqual(apiAction({
        method: api.getProfile,
        request: staticAction(constants.PROFILE_FETCH_REQUEST),
        success: dataAction(constants.PROFILE_FETCH_SUCCESS),
        failures: [[ApiResponseError, staticAction(constants.PROFILE_FETCH_FAILURE)]],
      }));
    });
  });

  describe('updateProfile', () => {
    it('should create actions for profile api updates', () => {
      expect(updateProfile).toEqual(apiAction({
        method: api.updateProfile,
        request: staticAction(constants.PROFILE_UPDATE_REQUEST),
        success: staticAction(constants.PROFILE_UPDATE_SUCCESS),
        failures: [[ApiResponseError, staticAction(constants.PROFILE_UPDATE_FAILURE)]],
      }));
    });
  });

  describe('updateProfilePicture', () => {
    it('should create actions for profile image api updates', () => {
      expect(updateProfilePicture).toEqual(apiAction({
        method: api.updateProfilePicture,
        request: staticAction(constants.PROFILE_IMAGE_UPDATE_REQUEST),
        success: staticAction(constants.PROFILE_IMAGE_UPDATE_SUCCESS),
        failures: [[ApiResponseError, staticAction(constants.PROFILE_IMAGE_UPDATE_FAILURE)]],
      }));
    });
  });
});
