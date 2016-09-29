import { has, camelCase } from 'lodash';
import FCM from 'react-native-fcm';
import { updateNotificationToken } from 'src/api';
import { staticAction } from 'src/actionHelpers';
import * as constants from 'src/constants/notifications';
import deepMapKeys from 'deep-map-keys';


const toCamelCase = d => deepMapKeys(d, k => camelCase(k));
const parsePayload = payload => toCamelCase(JSON.parse(payload));


const notificationAction = ({
  type,
  payload,
}) => has(constants.NOTIFICATION_ACTIONS, type)
  ? {
    type: constants.NOTIFICATION_ACTIONS[type],
    payload: parsePayload(payload),
  }
  : {
    type: constants.UNKNOWN_NOTIFICATION_RECEIVED,
    payload: {
      type,
      payload: parsePayload(payload),
    },
  };


const handleNotifications = dispatch => (
  FCM.on('notification', notif => dispatch(notificationAction(notif))));


export const setupNotificationsFailure = staticAction(
  constants.NOTIFICATIONS_SETUP_FAILURE);


// TODO handle notification failure
export const setupNotifications = () => (dispatch, {
  auth,
  profile: { id },
}) => Promise.resolve()
  .then(() => FCM.getFCMToken())
  .then(token => updateNotificationToken(id, token, auth))
  .then(() => handleNotifications(dispatch))
  .catch(() => dispatch(setupNotificationsFailure()));
