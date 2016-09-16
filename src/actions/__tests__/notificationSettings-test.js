jest.mock('src/actionHelpers', () => ({
  apiAction: jest.fn(),
  staticAction: global.mock(),
}));

import * as constants from 'src/constants/notificationSettings';
import { apiAction, staticAction } from 'src/actionHelpers';
import { updateNotificationToken } from 'src/actions/notificationSettings';
import * as api from 'src/api';

import { fakeContext } from 'app/scripts/helpers';

const { ApiResponseError } = api;


describe('actions/notificationSettings', () => {
  beforeEach(() => {
    apiAction.mockClear();
  });

  describe('updateNotificationToken', () => {
    it('should create actions for updating the users notification token', () => {
      const dispatch = jest.fn();
      const ctx = fakeContext();
      const { profile: { id } } = ctx;
      apiAction.mockImplementation(() => apiAction);
      updateNotificationToken(21)(dispatch, ctx);

      expect(apiAction.mock.calls).toEqual([
        [{
          method: api.updateNotificationToken,
          request: staticAction(constants.UPDATE_NOTIFICATION_TOKEN_REQUEST),
          success: staticAction(constants.UPDATE_NOTIFICATION_TOKEN_SUCCESS),
          failures: [
            [ApiResponseError, staticAction(constants.UPDATE_NOTIFICATION_TOKEN_FAILURE)],
          ],
        }],
        [id, 21],
        [dispatch, ctx],
      ]);
    });
  });
});
