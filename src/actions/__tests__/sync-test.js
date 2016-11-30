jest.mock('src/api/sync');

import * as constants from 'src/constants/sync';
import { load as apiLoad, ApiResponseError } from 'src/api';
import { dataAction } from 'src/actionHelpers';
import { load } from 'src/actions/sync';
import { testApiAction } from 'app/scripts/helpers';


describe('actions/sync', () => {
  describe('load', () => {
    it('should create actions for loading from the api', async () => {
      await testApiAction(load, {
        method: apiLoad,
        request: constants.LOAD_REQUEST,
        success: dataAction(constants.LOAD_SUCCESS),
        failures: [
          [ApiResponseError, constants.LOAD_FAILURE],
        ],
      })();
    });
  });
});
