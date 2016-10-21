import React from 'react';
import MentorshipApp from 'src/app';
import Raven from 'raven-js';
import ravenRN from 'raven-js/plugins/react-native';
import config from 'src/config';
import pkg from 'app/package';
import { AppRegistry } from 'react-native';


if (config.SENTRY_URL) {
  ravenRN(Raven);

  Raven
    .config(config.SENTRY_URL, {
      release: pkg.version,
      allowSecretKey: true,
    })
    .install();
}


AppRegistry.registerComponent('app', () => () => <MentorshipApp />);
