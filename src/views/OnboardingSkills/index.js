import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { BaseView, Header, Text, Pagination, ProgressBar,
  MultiLineTextInput } from 'src/components';
import styles from './styles';


const OnboardingSkills = ({
  skills = '',
  onChangeText,
  onBackPress,
  onNextPress,
}) => {
  const isPaginationDisabled = skills.length === 0;
  return (
    <BaseView>
      <ProgressBar completed={7 / 7} />
      <Header>
        <Text style={Text.types.title}>
          What skills and strengths do you have that will help you as a Mentor?
        </Text>
      </Header>

      <MultiLineTextInput
        value={skills}
        placeholder="Type your answer here"
        maxLength={50}
        onChangeText={(text) => onChangeText({ skills: text })}
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


OnboardingSkills.propTypes = {
  skills: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  onBackPress: PropTypes.func.isRequired,
  onNextPress: PropTypes.func.isRequired,
};


export default OnboardingSkills;
