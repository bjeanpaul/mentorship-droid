import React, { PropTypes } from 'react';
import { Text, TextInput, MultiLineTextInput } from 'src/components';
import FormStep from 'src/containers/OnboardingFormStepContainer';
import styles from './styles';


const Occupation = ({
  jobTitle = '',
  jobSector = '',
  onChangeText,
}) => (
  <FormStep
    paginationDisabled={jobTitle.length === 0 || jobSector.length === 0}
    title="What do you do?"
  >
    <TextInput
      label="Job Sector"
      value={jobSector}
      onChangeText={text => onChangeText({ jobSector: text })}
    />
    <TextInput
      label="Job Title"
      value={jobTitle}
      onChangeText={text => onChangeText({ jobTitle: text })}
    />
  </FormStep>
);
Occupation.propTypes = {
  jobSector: PropTypes.string,
  jobTitle: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
};


const Motivation = ({
  motivation = '',
  onChangeText,
}) => (
  <FormStep
    title="Why did you become a mentor?"
    paginationDisabled={motivation.length === 0}
  >
    <MultiLineTextInput
      value={motivation}
      placeholder="Type your answer here"
      maxLength={50}
      onChangeText={text => onChangeText({ motivation: text })}
    />
  </FormStep>
);
Motivation.propTypes = {
  motivation: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
};


const Inspiration = ({
  inspiration = '',
  onChangeText,
}) => (
  <FormStep
    title="Who would you love as your own mentor?"
    paginationDisabled={inspiration.length === 0}
  >
    <MultiLineTextInput
      value={inspiration}
      placeholder="Type your answer here"
      onChangeText={text => onChangeText({ inspiration: text })}
    />
    <Text style={styles.hint}>e.g. Malala, Sania Nehwal, Chanda Kocchar</Text>
  </FormStep>
);
Inspiration.propTypes = {
  inspiration: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
};


const Skills = ({
  skills = '',
  onChangeText,
}) => (
  <FormStep
    title="What skills and strengths do you have that will help you as a Mentor?"
    paginationDisabled={skills.length === 0}
  >
    <MultiLineTextInput
      value={skills}
      placeholder="Type your answer here"
      maxLength={50}
      onChangeText={(text) => onChangeText({ skills: text })}
    />
  </FormStep>
);
Skills.propTypes = {
  skills: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
};


const ThreeWords = ({
  tags = '',
  onChangeText,
}) => (
  <FormStep
    title="Describe yourself in three words"
    paginationDisabled={tags.split(' ').length < 3}
  >
    <MultiLineTextInput
      value={tags}
      placeholder="Type your answer here"
      onChangeText={text => onChangeText({ tags: text })}
    />
    <Text style={styles.hint}>e.g. curious, savvy, blunt, friendly</Text>
  </FormStep>
);
ThreeWords.propTypes = {
  tags: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
};


export {
  Occupation,
  Motivation,
  Inspiration,
  Skills,
  ThreeWords,
};
