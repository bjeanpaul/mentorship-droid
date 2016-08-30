import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { BaseView, Header, Text, Pagination, ProgressBar, TextInput } from 'src/components';
import styles from './styles';


const OnboardingOccupation = ({
  jobTitle = '',
  jobSector = '',
  onChangeText,
  onBackPress,
  onNextPress,
}) => {
  const isPaginationDisabled = jobTitle.length === 0 || jobSector.length === 0;
  return (
    <BaseView>
      <ProgressBar completed={0.3 / 0.7} />
      <Header>
        <Text style={Text.types.title}>What do you do?</Text>
      </Header>

      <TextInput
        value={jobSector}
        label="Job Sector"
        onChangeText={(text) => onChangeText({ jobSector: text })}
      />
      <TextInput
        value={jobTitle}
        label="Job Title"
        onChangeText={(text) => onChangeText({ jobTitle: text })}
      />

      <View style={styles.footer}>
        <Pagination
          onBackPress={onBackPress}
          onNextPress={onNextPress}
          disabled={isPaginationDisabled}
        />
      </View>
    </BaseView>
  );
};


OnboardingOccupation.propTypes = {
  jobSector: PropTypes.string,
  jobTitle: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  onBackPress: PropTypes.func.isRequired,
  onNextPress: PropTypes.func.isRequired,
};


export default OnboardingOccupation;
