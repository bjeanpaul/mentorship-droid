import React, {
  Component,
  Navigator,
  View,
  Text,
} from 'react-native';

import NavigationDrawer from './NavigationDrawer';
import Onboarding from './onboarding';


class RootNavigator extends Component {
  initalRouteStack() {
    return [
      {
        component: NavigationDrawer,
      },
      // {
      //   modal: true,
      //   component: Onboarding,
      // },
    ];
  }

  // TODO: Make this better.
  configureScene(route) {
    if (route.sceneConfig) {
      return route.sceneConfig;
    }
    if (route.modal) {
      return Navigator.SceneConfigs.FloatFromBottom;
    }
    return Navigator.SceneConfigs.FloatFromRight;
  }

  renderScene(route, navigator) {
    return <route.component rootNavigator={navigator} />;
  }

  render() {
    return (
      <Navigator
        initialRouteStack={this.initalRouteStack()}
        renderScene={this.renderScene}
        configureScene={this.configureScene}
      />
    );
  }
}


export default RootNavigator;
