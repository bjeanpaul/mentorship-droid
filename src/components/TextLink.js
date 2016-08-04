import React, { Component } from 'react';
import { Text } from 'react-native';
import { Link } from 'react-router-native';


import globalStyles from '../StyleSheet';

const TextLink = (props) => (
    <Link {...props}>
      <Text style={[globalStyles.textLink, props.style]}>
        {props.children}
      </Text>
    </Link>
);

export default TextLink;
