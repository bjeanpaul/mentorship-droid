import React from 'react';
import { View, Text } from 'react-native';


/**
 TODO: Redirect after X minutes.
 TODO: Figure out if we can log this; and what information would be helpful
 to prevent this in future.
*/
const NotFound = () => (
  <View>
    <Text>
      You have stumbled into an unknown realm of the application.
      This is certainly a bug, and something that you should never have seen.
    </Text>
  </View>
);
export default NotFound;
