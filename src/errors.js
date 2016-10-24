import { noop } from 'lodash';

import ErrorUtils from 'ErrorUtils';
import actions from 'src/actions/errors';
import Raven from 'raven-js';
import ravenRN from 'raven-js/plugins/react-native';
import config from 'src/config';
import pkg from 'app/package';
import { errorSink } from 'src/helpers';


export default store => {
  if (config.SENTRY_URL) {
    Raven.addPlugin(ravenRN);

    Raven
      .config(config.SENTRY_URL, {
        release: pkg.version,
        allowSecretKey: true,
      })
      .install();
  }

  const defaultHandler = ErrorUtils.getGlobalHandler
    && ErrorUtils.getGlobalHandler()
    || ErrorUtils._globalHandler
    || noop;

  const handler = errorSink(store, actions, defaultHandler);
  ErrorUtils.setGlobalHandler(handler);
};
