import React, {
  Component,
  View,
  Text,
  TouchableHighlight,
  Navigator,
} from 'react-native'

import Button from '../components/Button';


const Welcome = ({ onContinuePress, rootNavigator }) => {
  return (
    <View>
      <Text>Welcome to our application, this is how you use it.</Text>

      <Button
        onPress={onContinuePress}
        text="Continue"
      />

      <Button
        onPress={() => rootNavigator.pop()}
        text="Cancel"
      />
    </View>
  )
}

export default Welcome
