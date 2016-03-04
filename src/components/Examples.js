import React, {
  Component,
  StatusBar,
  View,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  DrawerLayoutAndroid,
  ToolbarAndroid,
  Navigator
}
from 'react-native'

import { connect } from 'react-redux'


export const Training = () => {
  return (
    <View>
      <Text>I AM THE TRAINING VIEW</Text>
    </View>
  )
}

export const Login = ({rootNavigator}) => {

  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => {
          rootNavigator.push({
              modal: false,
              component: Login,
              sceneConfig: Navigator.SceneConfigs.FloatFromBottom
          })
        }}
      >
        <Text>PUSH</Text>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => {
          rootNavigator.pop()
        }}
      >
        <Text>POP</Text>
      </TouchableWithoutFeedback>
    </View>
  )
}

export const ResetPassword = () => {
  return (
    <View>
      <Text>Reset Password</Text>
    </View>
  )
}

export const Profile = () => {
  return (
    <View>
      <Text>Reset Password</Text>
    </View>
  )
}
