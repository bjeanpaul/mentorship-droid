import moment from 'moment';
import { connect } from 'react-redux';
import { groupBy, sortBy } from 'lodash';
import EventList from 'src/views/EventList';
import { getEvents } from 'src/stores/helpers';


const groupEventsByDate = events => {
  const groups = groupBy(sortBy(events, event => event.occuredAt).reverse(),
    event => moment(event.occuredAt).format('YYYY-MM-DD')
  );

  return Object.keys(groups)
  .sort()
  .reverse()
  .map(
    date => ({
      date,
      label: moment(date).fromNow(),
      events: groups[date],
    })
  );
};


const mapStateToProps = (state) => ({
  groups: groupEventsByDate(getEvents(state)),
});


export { groupEventsByDate };
export default connect(mapStateToProps)(EventList);
