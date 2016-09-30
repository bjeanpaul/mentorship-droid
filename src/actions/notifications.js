import { has, camelCase, isEmpty, omitBy, isUndefined } from 'lodash';
import FCM from 'react-native-fcm';
import { updateNotificationToken } from 'src/api';
import { staticAction } from 'src/actionHelpers';
import * as constants from 'src/constants/notifications';
import deepMapKeys from 'deep-map-keys';


const toCamelCase = d => deepMapKeys(d, k => camelCase(k));
const parsePayload = payload => payload && toCamelCase(JSON.parse(payload));


const notificationAction = d => has(constants.NOTIFICATION_ACTIONS, d.type)
  ? omitBy({
    type: constants.NOTIFICATION_ACTIONS[d.type],
    payload: parsePayload(d.payload),
  }, isUndefined)
  : {
    type: constants.UNKNOWN_NOTIFICATION_RECEIVED,
    payload: d,
  };


const handleNotifications = dispatch => {
  FCM.on('notification', notif => {
    if (!isEmpty(notif)) {
      dispatch(notificationAction(notif));
    }
  });
};


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
