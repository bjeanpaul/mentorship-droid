import { merge } from 'lodash';
import { listCategories } from 'src/api/categories';
import { listActivities } from 'src/api/activities';


const load = auth => Promise.resolve()
  .then(() => Promise.all([
    listCategories(auth),
    listActivities(auth),
  ]))
  .then((...res) => merge(...res));


export default load;
