import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { BaseView, Header, Text, Pagination, ProgressBar,
  MultiLineTextInput } from 'src/components';
import styles from './styles';


const OnboardingOwnMentor = ({
  threeWords = '',
  onChangeText,
  onBackPress,
  onNextPress,
}) => {
  // TODO: Create tag text input component
  const isPaginationDisabled = threeWords.split(' ').length < 3;
  return (
    <BaseView>
      <ProgressBar completed={6 / 7} />
      <Header>
        <Text style={Text.types.title}>Describe yourself in three words</Text>
      </Header>

      <MultiLineTextInput
        value={threeWords}
        placeholder="Type your answer here"
        onChangeText={(text) => onChangeText({ threeWords: text })}
      />
      <Text style={styles.hint}>e.g. curious, savvy, blunt, friendly</Text>

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


OnboardingOwnMentor.propTypes = {
  threeWords: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  onBackPress: PropTypes.func.isRequired,
  onNextPress: PropTypes.func.isRequired,
};


export default OnboardingOwnMentor;
