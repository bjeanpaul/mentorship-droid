import { merge, map } from 'lodash';
import { listCategories } from 'src/api/categories';
import { listActivities } from 'src/api/activities';


const load = auth => Promise.resolve()
  .then(() => Promise.all([
    listCategories(auth),
    listActivities(auth),
  ]))
  .then((res) => map(res, 'entities'))
  .then(merge)
  .then(entities => ({ entities }));


export default load;
