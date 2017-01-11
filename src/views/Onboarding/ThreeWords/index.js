import { compact } from 'lodash';
import React, { PropTypes } from 'react';

import { Text, TextInput, FormStep } from 'src/components';
import styles from 'src/views/Onboarding/styles';


const DELIM = /[\s,]+/;


const getTags = s => compact(s.split(DELIM));


const ThreeWords = ({
  profile: { tags = '' },
  onChange,
  ...props,
}) => {
  const tagList = getTags(tags);

  return (
    <FormStep
      uid="formStep"
      title="Describe yourself in three words"
      paginationDisabled={tagList.length !== 3}
      {...props}
    >
      <TextInput
        value={tags}
        placeholder="Type your answer here"
        onChangeText={text => onChange({ tags: text })}
      />
      <Text style={styles.hint}>
        Please separate words with spaces or commas,
        e.g. curious savvy blunt
      </Text>
    </FormStep>
  );
};


ThreeWords.propTypes = {
  profile: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onBackPress: PropTypes.func,
  onNextPress: PropTypes.func,
};


export default ThreeWords;
