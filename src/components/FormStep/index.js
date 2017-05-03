import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { Text, Step, Pagination } from 'src/components';
import styles from './styles';

const FormStep = ({
  title,
  paginationDisabled,
  paginationBackDisabled,
  children,
  ...props,
}) => (
  <Step>
    <Text style={[Text.types.title, styles.title]}>{title}</Text>

    <View style={styles.contentContainer}>
      {children}
    </View>

    <View style={styles.paginationContainer}>
      <Pagination
        backDisabled={paginationBackDisabled}
        disabled={paginationDisabled}
        {...props}
      />
    </View>
  </Step>
);

FormStep.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
  paginationDisabled: PropTypes.bool,
  paginationBackDisabled: PropTypes.bool,
  onBackPress: PropTypes.func,
  onNextPress: PropTypes.func,
  onDonePress: PropTypes.func,
  last: PropTypes.bool,
};


export default FormStep;
