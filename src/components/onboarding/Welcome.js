import React, {
  Component,
  View,
  Text,
  TouchableHighlight,
  Navigator,
} from 'react-native'


const Welcome = ({ onContinuePress }) => {
  return (
    <View>
      <Text>Welcome to our application, this is how you use it.</Text>
      <TouchableHighlight onPress={onContinuePress}>
        <Text>Continue</Text>
      </TouchableHighlight>
    </View>
  )
}

export default Welcome
