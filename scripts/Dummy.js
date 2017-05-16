import React, { PropTypes } from 'react';
import { View } from 'react-native';


const Dummy = ({
  children,
}) => (
  <View>{children}</View>
);


Dummy.propTypes = {
  children: PropTypes.any,
};


export default Dummy;
