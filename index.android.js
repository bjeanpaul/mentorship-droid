import React from 'react';
import { AppRegistry } from 'react-native';
import config from 'src/config';


const EntryComponent = global.__DEV__ && config.USE_DEV_APP
  ? require('src/app.dev').default
  : require('src/app').default;

AppRegistry.registerComponent('app', () => () => <EntryComponent />);
