import { connect } from 'react-redux';
import EventList from 'src/views/EventList';
import { groupByDate, formatDateRelatively } from 'src/helpers';
import { getEvents } from 'src/store/helpers';


const groupEventsByDate = events => {
  return groupByDate(events, 'day', 'desc', 'occuredAt')
    .map(({ items, date }) => ({
      date,
      label: formatDateRelatively(date),
      events: items,
    }));
};


export const mapStateToProps = (state) => ({
  groups: groupEventsByDate(getEvents(state)),
});


export default connect(mapStateToProps)(EventList);
