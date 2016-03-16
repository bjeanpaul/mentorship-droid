import React, {
  Component,
  View,
  Text,
  TouchableHighlight,
  Navigator,
} from 'react-native'


const Welcome = ({ onContinuePress, rootNavigator }) => {
  return (
    <View>
      <Text>Welcome to our application, this is how you use it.</Text>
      <TouchableHighlight onPress={onContinuePress}>
        <Text>Continue</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => {
          rootNavigator.pop();
        }}>
        <Text>Dismiss</Text>
      </TouchableHighlight>
    </View>
  )
}

export default Welcome
