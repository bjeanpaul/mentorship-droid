import { requestForAPI } from '../services/api';
import actionTypes from './ScheduleConstants';

// TODO: CRUD generators -- add, edit schedule
export function callScheduleEndpoint(types, method, body, scheduleId) {
  const url = scheduleId ? `/schedule/${scheduleId}/` : '/schedule/';
  return {
    types,
    request: requestForAPI(url, {
      method,
      body: JSON.stringify(body),
    }),
  };
}

export function addSchedule(callTime) {
  return callScheduleEndpoint(actionTypes.SCHEDULE_ADD, 'post', { callTime });
}

export function fetchSchedule() {
  return {
    types: actionTypes.SCHEDULE_FETCH,
    request: requestForAPI('/schedule/'),
  };
}
