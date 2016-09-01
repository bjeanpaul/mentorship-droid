import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { Text, Pagination, TextInput, MultiLineTextInput } from 'src/components';
import Stepper, { Step } from 'src/components/Stepper';
import styles from './styles';
import { connect } from 'react-redux';
import * as actions from 'src/actions/onboarding';


const OnboardingStep = ({
  title,
  isPaginationDisabled,
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
    <Pagination
      onBackPress={onBackPress}
      onNextPress={onNextPress}
      disabled={isPaginationDisabled()}
    />
  </Step>
);

OnboardingStep.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  isPaginationDisabled: PropTypes.func.isRequired,
};

const OnboardingStepContainer = connect(null, {
  onBackPress: actions.stepBack,
  onNextPress: actions.stepForward,
})(OnboardingStep);





const Onboarding = ({
  navigation,
  profile,
  onChangeText,
}) => {
  return (
    <Stepper navigationState={navigation}>
      <OnboardingStepContainer
        title="What do you do?"
        isPaginationDisabled={() => false}
      >
        <TextInput
          value={profile.jobSector}
          label="Job Sector"
          onChangeText={text => onChangeText({ jobSector: text })}
        />
        <TextInput
          value={profile.jobTitle}
          label="Job Title"
          onChangeText={text => onChangeText({ jobTitle: text })}
        />
      </OnboardingStepContainer>


      <OnboardingStepContainer
        title="Why did you become a mentor?"
        isPaginationDisabled={() => false}
      >
        <MultiLineTextInput
          value={profile.motivation}
          placeholder="Type your answer here"
          maxLength={50}
          onChangeText={text => onChangeText({ motivation: text })}
        />
      </OnboardingStepContainer>
    </Stepper>
  );
};

export default Onboarding;
