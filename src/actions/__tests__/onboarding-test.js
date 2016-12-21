jest.mock('react-native-image-picker');

import * as actions from 'src/actions/onboarding';
import * as constants from 'src/constants/onboarding';
import ImagePicker from 'react-native-image-picker';


describe('actions/onboarding', () => {
  afterEach(() => {
    ImagePicker.showImagePicker.mockClear();
  });

  describe('changeProfile', () => {
    it('should create an action for profile change', () => {
      expect(actions.changeProfile({
        jobTitle: 'Uncle',
        jobSector: 'Family',
      })).toEqual({
        type: constants.ONBOARDING_CHANGE_PROFILE,
        payload: {
          jobTitle: 'Uncle',
          jobSector: 'Family',
        },
      });
    });
  });

  describe('choosePicture', () => {
    it('should create an action for choosing a pocture', () => {
      expect(actions.choosePicture('/foo.png')).toEqual({
        type: constants.ONBOARDING_PICTURE_CHOSEN,
        payload: {
          profilePictureUploadPath: '/foo.png',
        },
      });
    });
  });

  describe('openPicturePicker', () => {
    it('should dispatch an action when a picture is chosen', () => {
      const dispatches = [];
      let done = () => fail('showImagePicker not called');

      ImagePicker.showImagePicker.mockImplementation((_, callback) => {
        done = callback;
      });

      actions.openPicturePicker()(action => dispatches.push(action));

      done({ uri: null });
      done({ uri: '/foo.jpg' });

      expect(dispatches)
        .toEqual([actions.choosePicture('/foo.jpg')]);
    });
  });
});
