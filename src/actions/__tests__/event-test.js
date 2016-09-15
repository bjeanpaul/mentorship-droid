jest.mock('src/actionHelpers', () => ({
  apiAction: global.mock(),
  staticAction: global.mock(),
  dataAction: global.mock(),
}));


import { isEqual } from 'lodash';
import * as constants from 'src/constants/event';
import * as api from 'src/api';

import {
  apiAction,
  staticAction,
  dataAction,
} from 'src/actionHelpers';

import { listEvents } from 'src/actions/event';

const { ApiResponseError } = api;


describe('actions/events', () => {
  describe('listEvents', () => {
    it('should create actions for events api lists', () => {
      expect(isEqual(listEvents, apiAction({
        method: api.listEvents,
        request: staticAction(constants.EVENT_LIST_REQUEST),
        success: dataAction(constants.EVENT_LIST_SUCCESS),
        failures: [[ApiResponseError, staticAction(constants.EVENT_LIST_FAILURE)]],
      }))).toBe(true);
    });
  });
});
