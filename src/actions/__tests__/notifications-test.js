jest
  .mock('react-native-fcm')
  .mock('src/api/notificationSettings');


import FCM from 'react-native-fcm';
import { capture, fakeAuth, fakeContext } from 'app/scripts/helpers';
import { updateNotificationToken } from 'src/api';
import { setupNotifications } from 'src/actions/notifications';
import * as constants from 'src/constants/notifications';


describe('notifications', () => {
  beforeEach(() => {
    FCM.on.mockClear();
    FCM.getFCMToken.mockClear();
    updateNotificationToken.mockClear();

    FCM.getFCMToken.mockImplementation(() => Promise.resolve(23));
    updateNotificationToken.mockImplementation(() => Promise.resolve());
  });

  describe('setupNotifications', () => {
    it('should update the users notification token', async () => {
      FCM.getFCMToken.mockImplementation(() => Promise.resolve(23));

      const ctx = fakeContext({
        profile: { id: 21 },
        auth: fakeAuth(),
      });

      await setupNotifications()(jest.fn(), ctx);
      expect(updateNotificationToken.mock.calls).toEqual([[21, 23, fakeAuth()]]);
    });

    it('should dispatch a failure action on token update failure', async () => {
      updateNotificationToken.mockImplementation(() => Promise.reject(new Error()));

      expect(await capture(setupNotifications(), fakeContext())).toEqual([{
        type: constants.NOTIFICATIONS_SETUP_FAILURE,
      }]);
    });

    it('should dispatch actions when notifications are received', async () => {
      const dispatch = jest.fn();
      await setupNotifications()(dispatch, fakeContext());

      const [[name, onNotification]] = FCM.on.mock.calls;
      expect(FCM.on.mock.calls.length).toEqual(1);
      expect(name).toEqual('notification');

      onNotification({
        type: 'DUMMY',
        payload: JSON.stringify({ bar: 23 }),
      });

      onNotification({
        type: 'DUMMY',
        payload: JSON.stringify({ baz: 21 }),
      });

      expect(dispatch.mock.calls).toEqual([[{
        type: constants.NOTIFICATION_ACTIONS.DUMMY,
        payload: { bar: 23 },
      }], [{
        type: constants.NOTIFICATION_ACTIONS.DUMMY,
        payload: { baz: 21 },
      }]]);
    });

    it('should camelcasify received notification payloads', async () => {
      const dispatch = jest.fn();
      await setupNotifications()(dispatch, fakeContext());

      const [[name, onNotification]] = FCM.on.mock.calls;
      expect(FCM.on.mock.calls.length).toEqual(1);
      expect(name).toEqual('notification');

      onNotification({
        type: 'DUMMY',
        payload: JSON.stringify({
          bar_baz: [{
            quux_corge_grault: 23,
          }],
        }),
      });

      expect(dispatch.mock.calls).toEqual([[{
        type: constants.NOTIFICATION_ACTIONS.DUMMY,
        payload: {
          barBaz: [{
            quuxCorgeGrault: 23,
          }],
        },
      }]]);
    });

    it('should dispatch a fallback action for unknown notifications', async () => {
      const dispatch = jest.fn();
      await setupNotifications()(dispatch, fakeContext());

      const [[name, onNotification]] = FCM.on.mock.calls;
      expect(FCM.on.mock.calls.length).toEqual(1);
      expect(name).toEqual('notification');

      onNotification({
        type: 'UNK',
        payload: JSON.stringify({ bar: 23 }),
      });

      expect(dispatch.mock.calls).toEqual([[{
        type: constants.UNKNOWN_NOTIFICATION_RECEIVED,
        payload: {
          type: 'UNK',
          payload: { bar: 23 },
        },
      }]]);
    });
  });
});
