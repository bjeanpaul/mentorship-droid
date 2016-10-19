import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { Text, Step, Pagination } from 'src/components';
import styles from './styles';

const FormStep = ({
  title,
  paginationDisabled,
  paginationBackDisabled,
  children,
  onBackPress,
  onNextPress,
}) => (
  <Step>
    <Text
      style={[Text.types.title, styles.title]}
    >
      {title}
    </Text>
    {children}
    <View style={styles.paginationContainer}>
      <Pagination
        onBackPress={onBackPress}
        onNextPress={onNextPress}
        backDisabled={paginationBackDisabled}
        disabled={paginationDisabled}
      />
    </View>
  </Step>
);

FormStep.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  paginationDisabled: PropTypes.bool,
  paginationBackDisabled: PropTypes.bool,
  onBackPress: PropTypes.func.isRequired,
  onNextPress: PropTypes.func.isRequired,
};


export default FormStep;
