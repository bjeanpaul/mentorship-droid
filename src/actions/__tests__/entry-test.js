jest.mock('src/actionHelpers', () => ({
  apiAction: global.mock(),
  staticAction: global.mock(),
  dataAction: global.mock(),
}));

jest.mock('src/api/profiles');

import * as constants from 'src/constants/entry';
import { enter as apiEnter, profileIsComplete, ApiResponseError } from 'src/api';
import { apiAction, staticAction, dataAction } from 'src/actionHelpers';
import { enter, enterNewUser, enterExistingUser } from 'src/actions/entry';
import { capture, fakeContext } from 'app/scripts/helpers';


describe('actions/entry', () => {
  beforeEach(() => {
    profileIsComplete.mockClear();
    enterExistingUser.mockClear();
    enterNewUser.mockClear();
  });

  describe('enterExistingUser', () => {
    it('should create actions for entering from the api', () => {
      expect(enterExistingUser.signature).toEqual(apiAction({
        method: apiEnter,
        request: staticAction(constants.EXISTING_USER_ENTER_REQUEST),
        success: dataAction(constants.EXISTING_USER_ENTER_SUCCESS),
        failures: [
          [ApiResponseError, staticAction(constants.EXISTING_USER_ENTER_FAILURE)],
        ],
      }).signature);
    });
  });

  describe('enter', () => {
    it('should call enterExistingUser() if a profile is complete', async () => {
      profileIsComplete.mockReturnValue(true);

      const action = { type: constants.EXISTING_USER_ENTER_SUCCESS };
      enterExistingUser.mockImplementation(() => dispatch => dispatch(action));
      expect(await capture(enter(), fakeContext())).toEqual([action]);
    });

    it('should call enterNewUser() if a profile is complete', async () => {
      profileIsComplete.mockReturnValue(false);

      const action = { type: constants.NEW_USER_ENTER };
      enterNewUser.mockImplementation(() => action);

      expect(await capture(enter(), fakeContext())).toEqual([enterNewUser()]);
    });
  });
});
