import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { BaseView, Header, Text, Pagination, ProgressBar,
  MultiLineTextInput } from 'src/components';
import styles from './styles';


const OnboardingOwnMentor = ({
  ownMentor = '',
  onChangeText,
  onBackPress,
  onNextPress,
}) => {
  const isPaginationDisabled = ownMentor.length === 0;
  return (
    <BaseView>
      <ProgressBar completed={5 / 7} />
      <Header>
        <Text style={Text.types.title}>Who would you love as your own mentor?</Text>
      </Header>

      <MultiLineTextInput
        value={ownMentor}
        placeholder="Type your answer here"
        onChangeText={(text) => onChangeText({ ownMentor: text })}
      />
      <Text style={styles.hint}>e.g. Malala, Sania Nehwal, Chanda Kocchar</Text>

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
  ownMentor: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  onBackPress: PropTypes.func.isRequired,
  onNextPress: PropTypes.func.isRequired,
};


export default OnboardingOwnMentor;
