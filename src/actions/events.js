import * as api from 'src/api';
import * as constants from 'src/constants/events';

import {
  apiAction,
  dataAction,
  staticAction,
  tickAction,
} from 'src/actionHelpers';

const { NetworkError, ApiResponseError } = api;


const listEventDef = {
  method: api.listEvents,
  request: staticAction(constants.EVENT_LIST_REQUEST),
  success: dataAction(constants.EVENT_LIST_SUCCESS),
  failures: [
    [ApiResponseError, staticAction(constants.EVENT_LIST_FAILURE)],
    [NetworkError, staticAction(constants.EVENT_LIST_NETWORK_FAILURE)],
  ],
};


const listEvents = apiAction(listEventDef);


const listRecentEvents = apiAction({
  ...listEventDef,
  method: auth => api.listEvents(auth, {
    pageSize: constants.EVENT_LIST_RECENT_PAGE_SIZE,
  }),
});


const startEventPolling = tickAction(
  constants.EVENT_POLL_INTERVAL,
  constants.EVENT_POLL_TICK);


export {
  listEvents,
  listRecentEvents,
  startEventPolling,
};
