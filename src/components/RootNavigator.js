import React, {
  Component,
  Navigator,
  View,
  Text,
} from 'react-native';

import NavigationDrawer from './NavigationDrawer';
import Onboarding from './onboarding';


const Training = function Training() {
  return (
    <View><Text>I am the training view.</Text></View>
  );
};

class RootNavigator extends Component {

  initalRouteStack() {
    return [
      {
        component: Training,
      },
      {
        modal: true,
        component: Onboarding,
      },
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
    const routeComponent = <route.component rootNavigator={navigator} />;
    if (route.modal) {
      return routeComponent;
    }

    return (
      <NavigationDrawer rootNavigator={navigator}>
        {routeComponent}
      </NavigationDrawer>
    );
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
