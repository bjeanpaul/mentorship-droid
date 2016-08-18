import reduce from 'src/profile/reducer';
import * as constants from 'src/profile/constants';
import { fakeProfileData } from 'scripts/helpers';


describe('profile/reducer', () => {
  describe('PROFILE_FETCH_REQUEST', () => {
    it('should mark the status as busy', () => {
      const { status } = reduce({
        status: constants.STATUS_IDLE,
      }, {
        type: constants.PROFILE_FETCH_REQUEST,
      });

      expect(status).toEqual(constants.STATUS_BUSY);
    });
  });

  describe('PROFILE_UPDATE_REQUEST', () => {
    it('should mark the state as busy', () => {
      const { status } = reduce({
        status: constants.STATUS_IDLE,
      }, {
        type: constants.PROFILE_UPDATE_REQUEST,
      });

      expect(status).toEqual(constants.STATUS_BUSY);
    });
  });

  describe('PROFILE_IMAGE_UPDATE_REQUEST', () => {
    it('should mark the state as busy', () => {
      const { status } = reduce({
        status: constants.STATUS_IDLE,
      }, {
        type: constants.PROFILE_IMAGE_UPDATE_REQUEST,
      });

      expect(status).toEqual(constants.STATUS_BUSY);
    });
  });

  describe('PROFILE_FETCH_SUCCESS', () => {
    it('should mark the state as busy', () => {
      const { status } = reduce({
        status: constants.STATUS_BUSY,
      }, {
        type: constants.PROFILE_FETCH_SUCCESS,
        payload: fakeProfileData(),
      });

      expect(status).toEqual(constants.STATUS_IDLE);
    });
  });

  describe('PROFILE_UPDATE_SUCCESS', () => {
    it('should mark the state as idle', () => {
      const { status } = reduce({
        status: constants.STATUS_BUSY,
      }, {
        type: constants.PROFILE_UPDATE_SUCCESS,
      });

      expect(status).toEqual(constants.STATUS_IDLE);
    });
  });

  describe('PROFILE_IMAGE_UPDATE_SUCCESS', () => {
    it('should mark the state as idle', () => {
      const { status } = reduce({
        status: constants.STATUS_BUSY,
      }, {
        type: constants.PROFILE_IMAGE_UPDATE_SUCCESS,
      });

      expect(status).toEqual(constants.STATUS_IDLE);
    });
  });

  describe('PROFILE_FETCH_FAILURE', () => {
    it('should mark the state as erroneous', () => {
      const { status } = reduce({
        status: constants.STATUS_BUSY,
      }, {
        type: constants.PROFILE_FETCH_FAILURE,
      });

      expect(status).toEqual(constants.STATUS_ERROR);
    });
  });

  describe('PROFILE_UPDATE_FAILURE', () => {
    it('should mark the state as erroneous', () => {
      const { status } = reduce({
        status: constants.STATUS_BUSY,
      }, {
        type: constants.PROFILE_UPDATE_FAILURE,
      });

      expect(status).toEqual(constants.STATUS_ERROR);
    });
  });

  describe('PROFILE_IMAGE_UPDATE_FAILURE', () => {
    it('should mark the state as erroneous', () => {
      const { status } = reduce({
        status: constants.STATUS_BUSY,
      }, {
        type: constants.PROFILE_IMAGE_UPDATE_FAILURE,
      });

      expect(status).toEqual(constants.STATUS_ERROR);
    });
  });
});
