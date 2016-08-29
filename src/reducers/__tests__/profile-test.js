import reduce from 'src/reducers/profile';
import * as constants from 'src/constants/profile';
import * as statuses from 'src/profile/statuses';
import { fakeProfileData } from 'app/scripts/helpers';


describe('reducers/profile', () => {
  describe('PROFILE_FETCH_REQUEST', () => {
    it('should mark the status as busy', () => {
      const { status } = reduce({
        status: statuses.profileStatusIdle(),
      }, {
        type: constants.PROFILE_FETCH_REQUEST,
      });

      expect(status).toEqual(statuses.profileStatusBusy());
    });
  });

  describe('PROFILE_UPDATE_REQUEST', () => {
    it('should mark the state as busy', () => {
      const { status } = reduce({
        status: statuses.profileStatusIdle(),
      }, {
        type: constants.PROFILE_UPDATE_REQUEST,
      });

      expect(status).toEqual(statuses.profileStatusBusy());
    });
  });

  describe('PROFILE_IMAGE_UPDATE_REQUEST', () => {
    it('should mark the state as busy', () => {
      const { status } = reduce({
        status: statuses.profileStatusIdle(),
      }, {
        type: constants.PROFILE_IMAGE_UPDATE_REQUEST,
      });

      expect(status).toEqual(statuses.profileStatusBusy());
    });
  });

  describe('PROFILE_FETCH_SUCCESS', () => {
    it('should mark the state as busy', () => {
      const { status } = reduce({
        status: statuses.profileStatusBusy(),
      }, {
        type: constants.PROFILE_FETCH_SUCCESS,
        payload: fakeProfileData(),
      });

      expect(status).toEqual(statuses.profileStatusIdle());
    });
  });

  describe('PROFILE_UPDATE_SUCCESS', () => {
    it('should mark the state as idle', () => {
      const { status } = reduce({
        status: statuses.profileStatusBusy(),
      }, {
        type: constants.PROFILE_UPDATE_SUCCESS,
      });

      expect(status).toEqual(statuses.profileStatusIdle());
    });
  });

  describe('PROFILE_IMAGE_UPDATE_SUCCESS', () => {
    it('should mark the state as idle', () => {
      const { status } = reduce({
        status: statuses.profileStatusBusy(),
      }, {
        type: constants.PROFILE_IMAGE_UPDATE_SUCCESS,
      });

      expect(status).toEqual(statuses.profileStatusIdle());
    });
  });

  describe('PROFILE_FETCH_FAILURE', () => {
    it('should mark the state as erroneous', () => {
      const { status } = reduce({
        status: statuses.profileStatusBusy(),
      }, {
        type: constants.PROFILE_FETCH_FAILURE,
      });

      expect(status).toEqual(statuses.profileStatusError());
    });
  });

  describe('PROFILE_UPDATE_FAILURE', () => {
    it('should mark the state as erroneous', () => {
      const { status } = reduce({
        status: statuses.profileStatusBusy(),
      }, {
        type: constants.PROFILE_UPDATE_FAILURE,
      });

      expect(status).toEqual(statuses.profileStatusError());
    });
  });

  describe('PROFILE_IMAGE_UPDATE_FAILURE', () => {
    it('should mark the state as erroneous', () => {
      const { status } = reduce({
        status: statuses.profileStatusBusy(),
      }, {
        type: constants.PROFILE_IMAGE_UPDATE_FAILURE,
      });

      expect(status).toEqual(statuses.profileStatusError());
    });
  });
});
