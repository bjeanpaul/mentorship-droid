jest.mock('src/api/profiles');

import { capture } from 'scripts/helpers';
import { uploadProfileImage } from 'src/profile/actions';
import { fakeContext } from 'scripts/helpers';
import { noop } from 'lodash';

import {
  ApiResponseError,
  uploadProfileImage as apiUploadProfileImage
} from 'src/api';


import {
  PROFILE_IMAGE_UPDATE_REQUEST,
  PROFILE_IMAGE_UPDATE_SUCCESS,
  PROFILE_IMAGE_UPDATE_FAILURE,
} from 'src/profile/constants';


describe('profile/actions', () => {
  beforeEach(() => {
    apiUploadProfileImage.mockClear();
    apiUploadProfileImage.mockReturnValue(Promise.resolve(null));
  });

  fdescribe('uploadProfileImage', () => {
    it('should dispatch request', async () => {
      const ctx = fakeContext();
      const [action] = await capture(uploadProfileImage(23, 'foo.png'), ctx);

      expect(action).toEqual({
        type: PROFILE_IMAGE_UPDATE_REQUEST,
      });
    });

    it('should dispatch success for successful uploads', async () => {
      apiUploadProfileImage.mockReturnValue(Promise.resolve(null));

      const ctx = fakeContext();
      const [_request, action] = await capture(uploadProfileImage(23, 'foo.png'), ctx);

      expect(action).toEqual({
        type: PROFILE_IMAGE_UPDATE_SUCCESS,
      });
    });

    it('should dispatch failure for failed uploads', async () => {
      apiUploadProfileImage.mockReturnValue(Promise.reject(new ApiResponseError('o_O')));

      const ctx = fakeContext();
      const [_request, action] = await capture(uploadProfileImage(23, 'foo.png'), ctx);

      expect(action).toEqual({
        type: PROFILE_IMAGE_UPDATE_FAILURE,
      });
    });

    it('should call apiUploadProfileImage() with the correct params', async () => {
      const ctx = fakeContext();
      const { auth } = ctx;

      await uploadProfileImage(23, 'foo.png')(noop, ctx);
      expect(apiUploadProfileImage.mock.calls).toEqual([[23, 'foo.png', auth]]);
    });
  });
});
