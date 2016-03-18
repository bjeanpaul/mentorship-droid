import moment from 'moment';
import { connect } from 'react-redux';

import { ScheduleList } from './ScheduleList';

const [UPCOMING_CALLS, PAST_CALLS] = ['upcoming', 'past'];

const filterCalls = (calls, filter) => {
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
    upcomingCalls: filterCalls(state.schedule.calls, UPCOMING_CALLS),
    pastCalls: filterCalls(state.schedule.calls, PAST_CALLS),
  };
};

export const ScheduleListContainer = connect(
  mapStateToProps
)(ScheduleList);
