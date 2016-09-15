jest.mock('src/api/request');

import { identity } from 'lodash';
import { fakeAuth } from 'app/scripts/helpers';
import request from 'src/api/request';
import { NotificationSettings } from 'src/api/schemas';

import { patchNotificationSettings } from 'src/api';


describe('api/notificationSettings', () => {
  beforeEach(() => {
    request.mockImplementation(identity);
    request.mockClear();
  });

  describe('updateProfile', () => {
    it('should construct a request for updating a profile', () => {
      expect(patchNotificationSettings(23, { fake: 'data' }, fakeAuth())).toEqual({
        url: '/notification-settings/23/',
        method: 'PATCH',
        data: { fake: 'data' },
        auth: fakeAuth(),
        schema: NotificationSettings,
      });
    });
  });
});
