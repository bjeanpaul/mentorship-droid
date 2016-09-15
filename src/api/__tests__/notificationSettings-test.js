jest.mock('src/api/request');

import { identity } from 'lodash';
import { fakeAuth } from 'app/scripts/helpers';
import request from 'src/api/request';
import { NotificationSettings } from 'src/api/schemas';

import {
  updateNotificationToken,
  patchNotificationSettings,
} from 'src/api';


describe('api/notificationSettings', () => {
  beforeEach(() => {
    request.mockImplementation(identity);
    request.mockClear();
  });

  describe('patchNotificationSettings', () => {
    it('should construct a request for patching notification settings', () => {
      expect(patchNotificationSettings(23, { fake: 'data' }, fakeAuth())).toEqual({
        url: '/notification-settings/23/',
        method: 'PATCH',
        data: { fake: 'data' },
        auth: fakeAuth(),
        schema: NotificationSettings,
      });
    });
  });

  describe('updateNotificationToken', () => {
    it('should construct a request updating a notification token', () => {
      expect(updateNotificationToken(23, 21, fakeAuth())).toEqual({
        url: '/notification-settings/23/',
        method: 'PATCH',
        data: { androidRegistrationToken: 21 },
        auth: fakeAuth(),
        schema: NotificationSettings,
      });
    });
  });
});
