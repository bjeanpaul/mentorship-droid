import moment from 'moment';
import { connect } from 'react-redux';

import { ScheduleList } from './ScheduleList';
import { fetchSchedules } from './ScheduleActions';

const [UPCOMING_CALLS, PAST_CALLS] = ['upcoming', 'past'];

const filterCalls = (calls = [], filter) => {
  const today = new Date();
  switch (filter) {
    case UPCOMING_CALLS:
      return calls.filter(
        call => moment(call.timestamp).isSameOrAfter(today, 'day')
      );
    case PAST_CALLS:
      return calls.filter(
        call => moment(call.timestamp).isBefore(today, 'day')
      );
    default:
      return calls;
  }
};

const mapStateToProps = function mapStateToProps(state) {
  return {
    isLoading: state.schedule.isLoading,
    upcomingCalls: filterCalls(state.schedule.results, UPCOMING_CALLS),
    pastCalls: filterCalls(state.schedule.results, PAST_CALLS),
  };
};

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchSchedules: () => dispatch(fetchSchedules()),
  };
};


export const ScheduleListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduleList);
