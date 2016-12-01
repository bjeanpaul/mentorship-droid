import { merge, map } from 'lodash';
import { listCategories } from 'src/api/categories';
import { listActivities } from 'src/api/activities';
import { listScheduledCalls } from 'src/api/schedule';
import { listEvents } from 'src/api/events';
import { listCallNotes } from 'src/api/callNotes';
import { listMessages } from 'src/api/messages';


export const load = auth => Promise.resolve()
  .then(() => Promise.all([
    listCategories(auth),
    listActivities(auth),
    listScheduledCalls(auth),
    listEvents(auth),
    listCallNotes(auth),
    listMessages(auth),
  ]))
  .then((res) => merge(...map(res, 'entities')))
  .then(entities => ({ entities }));
