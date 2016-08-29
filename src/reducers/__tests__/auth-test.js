import reduce from 'src/reducers/auth';
import { fakeAuth, fakeProfileListData } from 'app/scripts/helpers';
import * as statuses from 'src/auth/statuses';
import * as actions from 'src/actions/auth';


describe('auth/reducer', () => {
  describe('AUTH_LOGIN_REQUEST', () => {
    it('should mark the status as request', () => {
      const { status } = reduce({
        status: statuses.authStatusIdle(),
      }, actions.loginRequest());

      expect(status).toEqual(statuses.authStatusBusy());
    });
  });

  describe('AUTH_LOGIN_NOT_FOUND', () => {
    it('should mark the status as not found', () => {
      const { status } = reduce({
        status: statuses.authStatusBusy(),
      }, actions.loginNotFound());

      expect(status).toEqual(statuses.authStatusNotFound());
    });
  });

  describe('AUTH_LOGIN_FAILURE', () => {
    it('should mark the status as erroroneous', () => {
      const { status } = reduce({
        status: statuses.authStatusBusy(),
      }, actions.loginFailure());

      expect(status).toEqual(statuses.authStatusError());
    });
  });

  describe('AUTH_LOGIN_SUCCESS', () => {
    it('should mark the status as idle', () => {
      const { status } = reduce({
        status: statuses.authStatusBusy(),
      }, actions.loginSuccess({
        ...fakeProfileListData(),
        auth: fakeAuth(),
      }));

      expect(status).toEqual(statuses.authStatusIdle());
    });

    it('should set the profile id to the first given entity', () => {
      const { profileId } = reduce({
        profileId: null,
      }, actions.loginSuccess({
        ...fakeProfileListData([
          { id: 21 },
          { id: 23 },
        ]),
        auth: fakeAuth(),
      }));

      expect(profileId).toEqual(21);
    });

    it('should set auth details', () => {
      const { auth } = reduce({
        auth: null,
      }, actions.loginSuccess({
        ...fakeProfileListData(),
        auth: fakeAuth(),
      }));

      expect(auth).toEqual(fakeAuth());
    });
  });
});
