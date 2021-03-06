jest.mock('src/api/profiles');


import { login } from 'src/actions/auth';
import { capture, fakeProfileListData } from 'app/scripts/helpers';
import { listProfiles, ApiAuthenticationError, ApiResponseError } from 'src/api';
import { noop } from 'lodash';
import * as constants from 'src/constants/auth';


describe('auth/actions', () => {
  beforeEach(() => {
    listProfiles.mockClear();
    listProfiles.mockReturnValue(Promise.resolve(fakeProfileListData()));
  });

  describe('login', () => {
    it('should dispatch request', async () => {
      const [action] = await capture(login('a@b.org', '1337'));

      expect(action).toEqual({
        type: constants.AUTH_LOGIN_REQUEST,
      });
    });

    it('should dispatch success for non-empty results', async () => {
      const data = fakeProfileListData();
      listProfiles.mockReturnValue(Promise.resolve(data));

      const [_request, action] = await capture(login('a@b.org', '1337'));

      expect(action).toEqual({
        type: constants.AUTH_LOGIN_SUCCESS,
        payload: {
          ...data,
          auth: {
            email: 'a@b.org',
            password: '1337',
          },
        },
      });
    });

    it('should dispatch not found for auth failures', async () => {
      listProfiles.mockReturnValue(Promise.reject(new ApiAuthenticationError('o_O')));

      const [_request, action] = await capture(login('a@b.org', '1337'));

      expect(action).toEqual({ type: constants.AUTH_LOGIN_NOT_FOUND });
    });

    it('should dispatch failure for api errors', async () => {
      listProfiles.mockReturnValue(Promise.reject(new ApiResponseError('o_O')));

      const [_request, action] = await capture(login('a@b.org', '1337'));

      expect(action).toEqual({ type: constants.AUTH_LOGIN_FAILURE });
    });

    it('should call listProfiles() with the correct params', async () => {
      await login('a@b.org', '1337')(noop);

      expect(listProfiles.mock.calls).toEqual([[{
        email: 'a@b.org',
        password: '1337',
      }, {
        email: 'a@b.org',
      }]]);
    });
  });
});
