import React, {
  Component,
} from 'react';

import {
  View,
  Text,
} from 'react-native';


import { styles } from '../StyleSheet';
import { Button } from '../Components/Button';

const Landing = () => (
  <View style={{ backgroundColor: '#dfe5e6', flex: 1 }}>
    <View style={{ flex: 1 }}>
    </View>
    <Text style={[styles.heading]}>
      This is a short, but sweet, description of the application.
    </Text>
    <Button labelText="Get Started" style={{ marginTop: 20, marginBottom: 20 }} />

    <View style={{ height: 48, backgroundColor: 'rgba(42, 45, 48, 0.05)', justifyContent: 'center' }}>
      <Text style={{ color: '#9fb1b3', fontSize: 14, textAlign: 'center' }}>
        Already have an account? <Text style={{ color: 'rgba(246, 111, 63, 0.9)' }}>Log in.</Text>
      </Text>
    </View>
  </View>
);

export default Landing;
