import { noop } from 'lodash';

import ErrorUtils from 'ErrorUtils';
import actions from 'src/actions/errors';
import { errorSink } from 'src/helpers';


const defaultHandler = ErrorUtils.getGlobalHandler && ErrorUtils.getGlobalHandler()
  || ErrorUtils._globalHandler
  || noop;


const fallback = e => {
  defaultHandler(e);
};


export default store => {
  const handler = errorSink(store, actions, fallback);
  ErrorUtils.setGlobalHandler(handler);
};
