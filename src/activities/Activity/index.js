import React, { PropTypes } from 'react';
import { View, Image, TouchableNativeFeedback } from 'react-native';

import { BaseView, Header, HeaderIcon, Text } from 'src/components';
import styles from './styles';


const Activity = ({
  category: {
    color,
    title: categoryTitle,
  },
  activity: {
    title,
    poster,
  },
  onBackPress,
  onSchedulePress,
}) => (
  <BaseView>
    <Header style={{ backgroundColor: color }}>
      <HeaderIcon
        uid="back"
        type={HeaderIcon.types.backLight}
        onPress={onBackPress}
      />

      <Text style={[Text.types.title, Text.themes.light]}>{categoryTitle}</Text>
    </Header>

    {
      poster
        ? <Image
          source={{ uri: poster }}
          style={[styles.poster, { backgroundColor: color }]}
        />
        : null
    }

    <View style={[styles.about, { backgroundColor: color }]}>
      <Text style={[Text.themes.light, styles.title]}>{title}</Text>
      <Status style={styles.statusAbout} />
      <Action style={styles.actionAbout} onSchedulePress={onSchedulePress} />
    </View>
  </BaseView>
);


// TODO handle cases where call notes or scheduled call exist
const Status = ({
  style,
}) => (
  <Text style={[styles.status, style]}>
    Discuss this activity with your Mentee
  </Text>
);


// TODO handle cases where call notes or scheduled call exist
const Action = ({
  style,
  onSchedulePress,
}) => (
  <ActionButton style={style} onPress={onSchedulePress}>
    Schedule Call
  </ActionButton>
);


const ActionButton = ({
  onPress,
  children,
  style = {},
}) => (
  <TouchableNativeFeedback onPress={onPress}>
    <View style={[styles.actionContainer, style.container]}>
      <Text style={[Text.themes.uppercase, styles.action, style.button]}>
        {children}
      </Text>
    </View>
  </TouchableNativeFeedback>
);


Activity.propTypes = {
  category: PropTypes.object.isRequired,
  activity: PropTypes.object.isRequired,
  onBackPress: PropTypes.func.isRequired,
  onSchedulePress: PropTypes.func.isRequired,
};


Status.propTypes = {
  style: PropTypes.any,
};


Action.propTypes = {
  style: PropTypes.any,
  onSchedulePress: PropTypes.func.isRequired,
};


ActionButton.propTypes = {
  style: PropTypes.object,
  onPress: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};


export default Activity;
