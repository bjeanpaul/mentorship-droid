import moment from 'moment';
import React, { PropTypes } from 'react';
import { View, Image, TouchableNativeFeedback, ScrollView } from 'react-native';

import { BaseView, Header, HeaderIcon, Text, Panel } from 'src/components';
import images from 'src/constants/images';
import styles from './styles';


const Activity = props => {
  const {
    category: {
      color,
      title: categoryTitle,
    },
    activity: {
      id,
      title,
      poster,
      objective,
      lessonRationale,
      instructions,
      prompts,
      reflectionPoints,
      skillsDeveloped,
    },
    onBackPress,
  } = props;

  return (
    <BaseView key={`activity:${id}`}>
      <ScrollView>
        <Header style={{ backgroundColor: color }}>
          <Text
            numberOfLines={1}
            style={[Text.types.title, Text.themes.light, styles.categoryTitle]}
          >
            {categoryTitle}
          </Text>

          <HeaderIcon
            uid="back"
            type={HeaderIcon.types.backLight}
            onPress={onBackPress}
          />
        </Header>

        {
          poster.exists() && <View style={[styles.posterContainer, { backgroundColor: color }]}>
            <Image
              source={poster.resize(360, 248).toSource()}
              style={styles.poster}
            />
          </View>
        }

        <View style={[styles.about, { backgroundColor: color }]}>
          <Text
            numberOfLines={1}
            style={[Text.themes.light, styles.title]}
          >
            {title}
          </Text>

          <Status style={styles.statusAbout} {...props} />
          <Action uid="topAction" {...props} />
        </View>

        <Section
          icon={images.ACTIVITY_OBJECTIVE}
          title="Objective"
        >
          {objective}
        </Section>

        <Section
          icon={images.ACTIVITY_RATIONALE}
          title="Lesson Rationale"
        >
          {lessonRationale}
        </Section>

        <Section
          icon={images.ACTIVITY_INSTRUCTIONS}
          title="Instructions"
        >
          {instructions}
        </Section>

        <Section
          icon={images.ACTIVITY_PROMPTS}
          title="Tips"
        >
          {prompts}
        </Section>

        <Section
          icon={images.ACTIVITY_REFLECTION_POINTS}
          title="Reflection Points"
        >
          {reflectionPoints}
        </Section>

        <Section
          icon={images.ACTIVITY_SKILLS_DEVELOPED}
          title="Skills Developed"
        >
          {skillsDeveloped}
        </Section>

        <View style={[styles.shortcuts, { backgroundColor: color }]}>
          <Status style={styles.statusShortcuts} {...props} />
          <Action
            uid="bottomAction"
            style={{ container: styles.actionContainerShortcuts }} {...props}
          />
        </View>
      </ScrollView>
    </BaseView>
  );
};


const Section = ({
  children,
  ...props,
}) => (
  <Panel {...props}>
    <Text style={Text.types.paragraph}>
      {children}
    </Text>
  </Panel>
);

const Status = ({
  style,
  latestCall,
  nextScheduledCall,
}) => {
  const statusStyles = [styles.status, style];

  if (latestCall) {
    return (
      <Text style={statusStyles}>
        Last discussed on {moment(latestCall.startTime).format('MMM D, h:mm a')}
      </Text>
    );
  } else if (nextScheduledCall) {
    return (
      <Text style={statusStyles}>
        Scheduled to discuss on {moment(nextScheduledCall.callTime).format('MMM D, h:mm a')}
      </Text>
    );
  } else {
    return (
      <Text style={statusStyles}>
        Discuss this activity with your Mentee
      </Text>
    );
  }
};


const Action = ({
  style,
  activity: { id },
  latestCall,
  nextScheduledCall,
  onSchedulePress,
  onReschedulePress,
  onViewCallNotesPress,
}) => {
  if (latestCall) {
    return (
      <ActionButton style={style} onPress={() => onViewCallNotesPress(id)}>
        Add or view notes
      </ActionButton>
    );
  } else if (nextScheduledCall) {
    return (
      <ActionButton style={style} onPress={() => onReschedulePress(nextScheduledCall.id)}>
        Rechedule Call
      </ActionButton>
    );
  } else {
    return (
      <ActionButton style={style} onPress={() => onSchedulePress(id)}>
        Schedule Call
      </ActionButton>
    );
  }
};


const ActionButton = ({
  onPress,
  children,
  style = {},
}) => (
  <TouchableNativeFeedback onPress={onPress}>
    <View style={[styles.actionContainer, style.container]}>
      <Text style={[Text.uppercase, styles.actionText, style.action]}>
        {children}
      </Text>
    </View>
  </TouchableNativeFeedback>
);


Activity.propTypes = {
  category: PropTypes.object.isRequired,
  activity: PropTypes.object.isRequired,
  onBackPress: PropTypes.func.isRequired,
};


Section.propTypes = {
  children: PropTypes.any,
};


Status.propTypes = {
  style: PropTypes.any,
  latestCall: PropTypes.object,
  nextScheduledCall: PropTypes.object,
};


Action.propTypes = {
  style: PropTypes.any,
  activity: PropTypes.object.isRequired,
  latestCall: PropTypes.object,
  nextScheduledCall: PropTypes.object,
  onSchedulePress: PropTypes.func.isRequired,
  onReschedulePress: PropTypes.func.isRequired,
  onViewCallNotesPress: PropTypes.func.isRequired,
};


ActionButton.propTypes = {
  style: PropTypes.object,
  onPress: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};


export default Activity;
