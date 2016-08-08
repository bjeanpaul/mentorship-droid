import React from 'react';
import { View } from 'react-native';


export const BaseView = ({ children }) =>
  <View
    style={{
      backgroundColor: 'white',
      flex: 1,
    }}
  >{children}</View>;

export const Container = ({ children }) =>
  <View style={{ padding: 24 }}>{children}</View>;
