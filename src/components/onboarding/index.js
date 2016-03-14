/* eslint-disable react/jsx-no-bind */

import React, {
  Component,
  Text,
  Navigator,
} from 'react-native';


import Welcome from './Welcome';
import AccountActivation from './AccountActivation';
import ResetPassword from '../user/ResetPassword';


class Onboarding extends Component {

  configureScene() {
    return Navigator.SceneConfigs.FloatFromRight;
  }

  renderScene(route, navigator) {
    switch (route.id) {
      case 1:
        return (
          <Welcome onContinuePress={() => navigator.push({ id: 2 })} />
        );
      case 2:
        return (
          <AccountActivation onAuthenticated={() => navigator.push({ id: 3 })} />
        );
      case 3:
        return (
          <ResetPassword onResetPassword={() => navigator.push({ id: 4 })} />
        );

      default:
        return (<Text>Route not found.</Text>);
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ id: 2 }}
        configureScene={this.configureScene}
        renderScene={this.renderScene}
      />
    );
  }
}


export default Onboarding;
