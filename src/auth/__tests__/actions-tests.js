jest.mock('src/api/profiles');


import { login } from 'src/auth/actions';
import { capture } from 'scripts/helpers';
import { listProfiles } from 'src/api';
import { noop } from 'lodash';

import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
} from 'src/auth/constants';


describe('auth/actions', () => {
  beforeEach(() => {
    listProfiles.mockClear();
    listProfiles.mockReturnValue(Promise.resolve({ results: [23] }));
  });

  describe('login', () => {
    it('should dispatch request', async () => {
      const [action] = await capture(login('a@b.org', '1337'));

      expect(action).toEqual({
        type: AUTH_LOGIN_REQUEST,
      });
    });

    it('should dispatch success for non-empty results', async () => {
      listProfiles.mockReturnValue(Promise.resolve({ results: [23] }));

      const [_busy, action] = await capture(login('a@b.org', '1337'));

      expect(action).toEqual({
        type: AUTH_LOGIN_SUCCESS,
        payload: {
          entities: { results: [23] },
          auth: {
            email: 'a@b.org',
            password: '1337',
          },
        },
      });
    });

    it('should dispatch failure for empty results', async () => {
      listProfiles.mockReturnValue(Promise.resolve({ results: [] }));

      const [_busy, action] = await capture(login('a@b.org', '1337'));

      expect(action).toEqual({ type: AUTH_LOGIN_FAILURE });
    });

    it('should call listProfiles() with the correct params', async () => {
      await login('a@b.org', '1337')(noop);

      expect(listProfiles.mock.calls).toEqual([[{
        email: 'a@b.org',
        password: '1337',
      }]]);
    });
  });
});
