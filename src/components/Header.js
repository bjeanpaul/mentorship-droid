import React from 'react';
import { View } from 'react-native'
import { Heading } from 'src/components';
import globalStyles from 'src/StyleSheet';

const Header = ({ title = '' }) => (
  <View style={globalStyles.header}>
    <Heading>{title}</Heading>
  </View>
);
Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Header;
