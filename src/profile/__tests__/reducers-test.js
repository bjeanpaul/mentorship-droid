import reduce from 'src/profile/reducer';
import * as constants from 'src/profile/constants';
import { fakeProfileData } from 'app/scripts/helpers';


describe('profile/reducer', () => {
  describe('PROFILE_FETCH_REQUEST', () => {
    it('should mark the state as loading', () => {
      const { isLoading } = reduce({
        isLoading: false,
      }, {
        type: constants.PROFILE_FETCH_REQUEST,
      });

      expect(isLoading).toBe(true);
    });
  });

  describe('PROFILE_UPDATE_REQUEST', () => {
    it('should mark the state as loading', () => {
      const { isLoading } = reduce({
        isLoading: false,
      }, {
        type: constants.PROFILE_UPDATE_REQUEST,
      });

      expect(isLoading).toBe(true);
    });
  });

  describe('PROFILE_IMAGE_UPDATE_REQUEST', () => {
    it('should mark the state as loading', () => {
      const { isLoading } = reduce({
        isLoading: false,
      }, {
        type: constants.PROFILE_IMAGE_UPDATE_REQUEST,
      });

      expect(isLoading).toBe(true);
    });
  });

  describe('PROFILE_FETCH_SUCCESS', () => {
    it('should mark the state as loading', () => {
      const { isLoading } = reduce({
        isLoading: true,
      }, {
        type: constants.PROFILE_FETCH_SUCCESS,
        payload: {
          data: fakeProfileData()
        },
      });

      expect(isLoading).toBe(false);
    });

    it('should update the profile data', () => {
      const res = reduce({
        isLoading: true,
      }, {
        type: constants.PROFILE_FETCH_SUCCESS,
        payload: {
          data: fakeProfileData({
            id: 23,
            name: 'bar',
            username: 'foo',
          }),
        },
      });

      expect(res).toEqual(jasmine.objectContaining({
        id: 23,
        name: 'bar',
        username: 'foo',
      }));
    });
  });

  describe('PROFILE_UPDATE_SUCCESS', () => {
    it('should mark the state as loading', () => {
      const { isLoading } = reduce({
        isLoading: true,
      }, {
        type: constants.PROFILE_UPDATE_SUCCESS,
      });

      expect(isLoading).toBe(false);
    });
  });

  describe('PROFILE_IMAGE_UPDATE_SUCCESS', () => {
    it('should mark the state as loading', () => {
      const { isLoading } = reduce({
        isLoading: true,
      }, {
        type: constants.PROFILE_IMAGE_UPDATE_SUCCESS,
      });

      expect(isLoading).toBe(false);
    });
  });

  describe('PROFILE_FETCH_FAILURE', () => {
    it('should mark the state as loading', () => {
      const { isLoading } = reduce({
        isLoading: true,
      }, {
        type: constants.PROFILE_FETCH_FAILURE,
      });

      expect(isLoading).toBe(false);
    });
  });

  describe('PROFILE_UPDATE_FAILURE', () => {
    it('should mark the state as not loading', () => {
      const { isLoading } = reduce({
        isLoading: true,
      }, {
        type: constants.PROFILE_UPDATE_FAILURE,
      });

      expect(isLoading).toBe(false);
    });
  });

  describe('PROFILE_IMAGE_UPDATE_FAILURE', () => {
    it('should mark the state as not loading', () => {
      const { isLoading } = reduce({
        isLoading: true,
      }, {
        type: constants.PROFILE_IMAGE_UPDATE_FAILURE,
      });

      expect(isLoading).toBe(false);
    });
  });
});
