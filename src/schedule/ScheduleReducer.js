import actionTypes from './ScheduleConstants';

const [
  SCHEDULE_FETCH_REQUEST,
  SCHEDULE_FETCH_SUCCESS,
  SCHEDULE_FETCH_FAILURE,
] = actionTypes.SCHEDULE_FETCH;

const [
  SCHEDULE_ADD_REQUEST,
  SCHEDULE_ADD_SUCCESS,
  SCHEDULE_ADD_FAILURE,
] = actionTypes.SCHEDULE_ADD;
// add, delete, update

const schedule = function training(state = {
  isLoading: false,
  calls: [
    {
      id: 0,
      timestamp: '2016-03-20T15:03:10+00:00',
    },
    {
      id: 1,
      timestamp: '2016-03-18T15:03:10+00:00',
    },
    {
      id: 2,
      timestamp: '2016-03-15T15:03:10+00:00',
    },
    {
      id: 3,
      timestamp: '2016-03-19T15:03:10+00:00',
    },
  ],
}, action) {
  switch (action) {
    case SCHEDULE_FETCH_REQUEST:
    case SCHEDULE_ADD_REQUEST:
      return Object.assign({}, state, { isLoading: true });

    case SCHEDULE_FETCH_SUCCESS:
      return Object.assign({}, state, { calls: action.results });

    default:
      return state;
  }
};

export default schedule;
