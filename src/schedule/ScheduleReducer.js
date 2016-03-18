import actionTypes from './ScheduleConstants';


// TODO: Determine how much of this can we generate?
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
    case actionTypes.fetchRequest:
      return Object.assign({}, state, { isLoading: true });

    case actionTypes.fetchSuccess:
      return Object.assign({}, state, { calls: action.results });

    case actionTypes.fetchFailure:
      return {};

    default:
      return state;
  }
};

export default schedule;
