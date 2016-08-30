import React, { PropTypes } from 'react';
import { View, Image } from 'react-native';
import { BaseView, Text, Link, Button } from 'src/components';

import { MultiLineTextInput } from 'src/components';

import styles from './styles';
import images from 'src/constants/images';

const Landing = ({
  onGetStartedPress,
  onLoginPress,
}) => (
  <BaseView>

    <MultiLineTextInput
      placeholder="Type your answer here"
      maxLength={50}
    />


  </BaseView>
);
Landing.propTypes = {
  onGetStartedPress: PropTypes.func.isRequired,
  onLoginPress: PropTypes.func.isRequired,
};

export default Landing;
