import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { Text, Step, Pagination } from 'src/components';
import styles from './styles';

const FormStep = ({
  title,
  secondaryTitle,
  paginationDisabled,
  paginationBackDisabled,
  children,
  ...props,
}) => (
  <Step>
    <View style={styles.header}>
      <Text style={[Text.types.title, styles.title]}>{title}</Text>

      {
        secondaryTitle && <Text style={styles.secondaryTitle}>
          {secondaryTitle}
        </Text>
      }
    </View>

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
  secondaryTitle: PropTypes.string,
  children: PropTypes.any,
  paginationDisabled: PropTypes.bool,
  paginationBackDisabled: PropTypes.bool,
  onBackPress: PropTypes.func,
  onNextPress: PropTypes.func,
  onDonePress: PropTypes.func,
  last: PropTypes.bool,
};


export default FormStep;
