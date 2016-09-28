jest.mock('src/actionHelpers', () => ({
  apiAction: global.mock(),
  staticAction: global.mock(),
  dataAction: global.mock(),
}));

import { isEqual } from 'lodash';
import * as constants from 'src/constants/sync';
import { load as apiLoad, ApiResponseError } from 'src/api';
import { apiAction, staticAction, dataAction } from 'src/actionHelpers';
import { load } from 'src/actions/sync';


describe('actions/sync', () => {
  describe('load', () => {
    it('should create actions for loading from the api', () => {
      expect(isEqual(load, apiAction({
        method: apiLoad,
        request: staticAction(constants.LOAD_REQUEST),
        success: dataAction(constants.LOAD_SUCCESS),
        failures: [
          [ApiResponseError, staticAction(constants.LOAD_FAILURE)],
        ],
      }))).toBe(true);
    });
  });
});
