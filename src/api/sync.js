import { merge, map } from 'lodash';
import { listCategories } from 'src/api/categories';
import { listActivities } from 'src/api/activities';
import { listScheduledCalls } from 'src/api/schedule';


export const load = auth => Promise.resolve()
  .then(() => Promise.all([
    listCategories(auth),
    listActivities(auth),
    listScheduledCalls(auth),
  ]))
  .then((res) => merge(...map(res, 'entities')))
  .then(entities => ({ entities }));
