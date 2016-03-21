import React, { AppRegistry, UIManager } from 'react-native';

import MentorshipApp from './src/components/App';


UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);


AppRegistry.registerComponent('app', () => () => <MentorshipApp />);
