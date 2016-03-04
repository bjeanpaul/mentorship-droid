import React, { Component, Navigator, View, Text } from 'react-native'

import NavigationDrawer from '../components/NavigationDrawer'


import { Training, Login, ResetPassword, Profile } from '../components/Examples'


// TODO: Figure out if we can store this state in a store.
// TODO: Map state to props.
class RootNavigator extends Component {


  _initalRouteStack() {
    return [
      {
        modal: false,
        component: Training
      },
      {
        modal: true,
        component: Login
      },
    ]
  }

  // TODO: Make this better.
  _configureScene(route, routeStack) {

    if (route.sceneConfig) {
      return route.sceneConfig
    }
    if (route.modal) {
      return Navigator.SceneConfigs.FloatFromBottom
    }
    return Navigator.SceneConfigs.FloatFromRight;
  }

  _renderScene(route, navigator) {
    let Component = <route.component rootNavigator={navigator} />
    if (route.modal) {
      return Component
    }

    return (
      <NavigationDrawer
        rootNavigator={navigator}
      >
        {Component}
      </NavigationDrawer>
    )
  }

  render() {
    return (
      <Navigator
        initialRouteStack={this._initalRouteStack()}
        renderScene={(route, navigation) => this._renderScene(route, navigation)}
        configureScene={(route) => this._configureScene(route)}
      />
    )
  }
}

export default RootNavigator
