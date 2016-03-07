import React, {
  Component,
  View,
  Text,
  TouchableHighlight,
  Navigator,
} from 'react-native'


import LoginForm from '../components/LoginForm'


const Introduction = ({ onContinuePress }) => {
  return (
    <View>
      <Text>Welcome to our application, this is how you use it.</Text>
      <TouchableHighlight onPress={onContinuePress}>
        <Text>Continue</Text>
      </TouchableHighlight>
    </View>
  )
}

// Some introduction text
// Activation View
// Reset Password
// Profile

class Onboard extends Component {

  render() {
    return (
      <Navigator
        initialRoute={{index: 2}}
        renderScene={(route, navigator) => this._renderScene(route, navigator)}
      />
    )
  }

  _renderScene(route, navigator) {
    switch (route.index) {
      case 1:
        return (
          <Introduction
            onContinuePress={() => navigator.push({index: 2})}
            />
        )
      case 2:
        return (
          <LoginForm
            onAuthenticated={() => {
              alert(1)
            }}
          />
        )
    }

  }

}

export default Onboard
