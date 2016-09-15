import { NotificationSettings } from 'src/api/schemas';
import request from 'src/api/request';


export const patchNotificationSettings = (id, data, auth) => request({
  url: `/notification-settings/${id}/`,
  method: 'PATCH',
  schema: NotificationSettings,
  data,
  auth,
});


export const updateNotificationToken = (id, token, auth) => (
  patchNotificationSettings(id, { androidRegistrationToken: token }, auth));
