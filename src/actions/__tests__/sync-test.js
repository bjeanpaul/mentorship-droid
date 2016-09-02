jest.mock('src/actionHelpers', () => ({
  apiAction: global.mock(),
  staticAction: global.mock(),
  dataAction: global.mock(),
}));

import { isEqual } from 'lodash';
import * as constants from 'src/constants/entry';
import { load as apiLoad, ApiResponseError } from 'src/api';
import { apiAction, staticAction, dataAction } from 'src/actionHelpers';
import { load } from 'src/actions/sync';


describe('actions/sync', () => {
  beforeEach(() => {
    load.mockClear();
  });

  describe('load', () => {
    it('should create actions for entering from the api', () => {
      expect(isEqual(load, apiAction({
        method: apiLoad,
        request: staticAction(constants.EXISTING_USER_ENTER_REQUEST),
        success: dataAction(constants.EXISTING_USER_ENTER_SUCCESS),
        failures: [
          [ApiResponseError, staticAction(constants.EXISTING_USER_ENTER_FAILURE)],
        ],
      }))).toBe(true);
    });
  });
});
