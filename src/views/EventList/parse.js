import { groupByDate } from 'src/helpers';


export const groupEvents = events => groupByDate(events, 'day', 'desc', 'occuredAt');
