import * as api from 'src/api';
import * as constants from 'src/constants/events';

import { apiAction, dataAction, staticAction, tickAction } from 'src/actionHelpers';

const { NetworkError, ApiResponseError } = api;


const listEvents = apiAction({
  method: api.listEvents,
  request: staticAction(constants.EVENT_LIST_REQUEST),
  success: dataAction(constants.EVENT_LIST_SUCCESS),
  failures: [
    [ApiResponseError, staticAction(constants.EVENT_LIST_FAILURE)],
    [NetworkError, staticAction(constants.EVENT_LIST_NETWORK_FAILURE)],
  ],
});


const startEventPolling = tickAction(
  constants.EVENT_POLL_INTERVAL,
  constants.EVENT_POLL_TICK);


export {
  listEvents,
  startEventPolling,
};
