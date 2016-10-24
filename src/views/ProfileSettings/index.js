import React, { PropTypes } from 'react';
import { View, TouchableNativeFeedback } from 'react-native';

import styles from './styles';
import { BaseView, Text, Header, HeaderIcon } from 'src/components';


const TextSectionItem = ({
  onPress,
  children,
}) => (
  <TouchableNativeFeedback onPress={onPress}>
    <View style={styles.sectionItem}>
      <Text style={[Text.types.secondaryTitle, styles.sectionItemText]}>
        {children}
      </Text>
    </View>
  </TouchableNativeFeedback>
);


TextSectionItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};


const Section = ({
  title,
  children,
}) => (
  <View style={styles.section}>
    <Text style={[Text.types.sectionTitle]}>{title}</Text>
    {children}
  </View>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};


const ProfileSettings = ({
  onBackPress,
  onCallNotesPress,
  onLogoutPress,
}) => (
  <BaseView>
    <Header>
      <Text style={Text.types.title}>Settings</Text>

      <HeaderIcon
        uid="back"
        type={HeaderIcon.types.backDark}
        onPress={onBackPress}
      />
    </Header>

    <View style={styles.container}>
      <Section title="Your account">
        <TextSectionItem
          uid="callNotes"
          onPress={onCallNotesPress}
        >
          View call notes
        </TextSectionItem>

        <TextSectionItem
          uid="logout"
          onPress={onLogoutPress}
        >
          Sign Out
        </TextSectionItem>
      </Section>
    </View>
  </BaseView>
);


ProfileSettings.propTypes = {
  onBackPress: PropTypes.func.isRequired,
  onCallNotesPress: PropTypes.func.isRequired,
  onLogoutPress: PropTypes.func.isRequired,
};


export default ProfileSettings;
