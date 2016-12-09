import { groupBy, pick, first } from 'lodash';
import { groupByDate } from 'src/helpers';
import { COLLAPSIBLE_EVENTS } from 'src/constants/events';


const collapseEvents = (events, collapsibles) => {
  const res = [];
  const seen = {};
  const groups = pick(groupBy(events, 'eventType'), collapsibles);

  for (const event of events) {
    const { eventType } = event;
    const group = groups[eventType];

    if (!group) {
      res.push(event);
    } else if (!seen[eventType]) {
      res.push({
        id: first(group).id,
        items: group,
      });

      seen[eventType] = true;
    }
  }

  return res;
};


export const groupEvents = (events, collapsibles = COLLAPSIBLE_EVENTS) =>
  groupByDate(events, 'day', 'desc', 'occuredAt')
    .map(({ items, ...group }) => ({
      items: collapseEvents(items, collapsibles),
      ...group,
    }));
