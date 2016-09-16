import * as api from 'src/api';
import * as constants from 'src/constants/event';

import {
  apiAction,
  dataAction,
  staticAction,
} from 'src/actionHelpers';

const { ApiResponseError } = api;


const listEvents = apiAction({
  method: api.listEvents,
  request: staticAction(constants.EVENT_LIST_REQUEST),
  success: dataAction(constants.EVENT_LIST_SUCCESS),
  failures: [[ApiResponseError, staticAction(constants.EVENT_LIST_FAILURE)]],
});


export {
  listEvents,
};
