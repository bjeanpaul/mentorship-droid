import React from 'react';
import {
  AppRegistry,
  UIManager,
} from 'react-native';

import MentorshipApp from './src/app';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

AppRegistry.registerComponent('app', () => () => <MentorshipApp />);
