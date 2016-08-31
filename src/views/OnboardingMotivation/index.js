import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { BaseView, Header, Text, Pagination, ProgressBar,
  MultiLineTextInput } from 'src/components';
import styles from './styles';


const OnboardingMotivation = ({
  jobMotivation = '',
  onChangeText,
  onBackPress,
  onNextPress,
}) => {
  const isPaginationDisabled = jobMotivation.length === 0;
  return (
    <BaseView>
      <ProgressBar completed={4 / 7} />
      <Header>
        <Text style={Text.types.title}>Why did you become a mentor?</Text>
      </Header>

      <MultiLineTextInput
        value={jobMotivation}
        placeholder="Type your answer here"
        maxLength={50}
        onChangeText={(text) => onChangeText({ jobMotivation: text })}
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


OnboardingMotivation.propTypes = {
  jobMotivation: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  onBackPress: PropTypes.func.isRequired,
  onNextPress: PropTypes.func.isRequired,
};


export default OnboardingMotivation;
