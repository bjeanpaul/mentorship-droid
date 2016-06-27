import React, {
  Component,
} from 'react';

import {
  View,
  Text,
} from 'react-native';


import { styles } from '../StyleSheet';
import { Button, TransparentButton } from '../Components/Button';

const Landing = () => (
  <View style={{ backgroundColor: '#dfe5e6', flex: 1 }}>
    <View style={{ flex: 1 }}>
    </View>
    <View style={{ flex: 0.5, paddingLeft: 24, paddingRight: 24 }}>
      <Text style={{  color: '#003035', fontSize: 20, textAlign: 'center' }}>
        This is a short, but sweet, description of the application.
      </Text>
      <TransparentButton labelText="Get Started" style={{ marginTop: 20, marginBottom: 20 }} />
    </View>
    <View style={{ height: 48, backgroundColor: 'rgba(42, 45, 48, 0.05)', justifyContent: 'center' }}>
      <Text style={{ color: '#9fb1b3', fontSize: 14, textAlign: 'center' }}>
        Already have an account? <Text style={{ color: 'rgba(246, 111, 63, 0.9)' }}>Log in.</Text>
      </Text>
    </View>
  </View>
);

export default Landing;
