jest.mock('src/actionHelpers', () => ({
  apiAction: global.mock(),
  staticAction: global.mock(),
  dataAction: global.mock(),
}));

import * as api from 'src/api';
import * as constants from 'src/constants/profile';
import { apiAction, staticAction, dataAction } from 'src/actionHelpers';
import { load } from 'src/actions/load';

const { ApiResponseError } = api;


describe('actions/load', () => {
  describe('load', () => {
    it('should create actions for loading from the api', () => {
      expect(load).toEqual(apiAction({
        method: api.load,
        request: staticAction(constants.LOAD_REQUEST),
        success: dataAction(constants.LOAD_SUCCESS),
        failures: [[ApiResponseError, staticAction(constants.LOAD_FAILURE)]],
      }));
    });
  });
});
