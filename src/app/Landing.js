import React from 'react';
import { View } from 'react-native';
import { Heading, Button, Text } from 'src/components';


const Landing = () => (
  <View
    style={{
      backgroundColor: '#dfe5e6',
      flex: 1,
    }}
  >
    <View style={{ flex: 1 }} />
    <Heading>
      This is a short, but sweet, description of the application.
    </Heading>

    <Button
      style={{
        marginTop: 20,
        marginBottom: 20,
      }}

      label="Get Started"
    />

    <View
      style={{
        height: 48,
        backgroundColor: 'rgba(42, 45, 48, 0.05)',
        justifyContent: 'center',
      }}
    >

      <Text
        style={{
          color: '#9fb1b3',
          textAlign: 'center',
        }}
      >
        Already have an account? <Text style={{ color: 'rgba(246, 111, 63, 0.9)' }}>Log in.</Text>
      </Text>
    </View>
  </View>
);

export default Landing;
