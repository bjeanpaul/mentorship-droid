import { noop } from 'lodash';

import actions from 'src/actions/errors';
import { errorSink } from 'src/helpers';


const fallback = e => {
  // TODO error reporting
  noop(e);
};


export default store => errorSink(store, actions, fallback);
