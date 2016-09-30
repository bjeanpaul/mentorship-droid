import React, { PropTypes } from 'react';
import { View, Image, TouchableNativeFeedback, ScrollView } from 'react-native';

import { BaseView, Header, HeaderIcon, Text } from 'src/components';
import images from 'src/constants/images';
import styles from './styles';


const Activity = ({
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
  onSchedulePress,
}) => (
  <BaseView>
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
        poster
          ? <Image
            source={{ uri: poster }}
            style={[styles.poster, { backgroundColor: color }]}
          />
          : null
      }

      <View style={[styles.about, { backgroundColor: color }]}>
        <Text
          numberOfLines={1}
          style={[Text.themes.light, styles.title]}
        >
          {title}
        </Text>
        <Status style={styles.statusAbout} />
        <Action onPress={() => onSchedulePress(id)} />
      </View>

      <Section
        color={color}
        icon={images.ACTIVITY_OBJECTIVE}
        title="Objective"
      >
        {objective}
      </Section>

      <Section
        color={color}
        icon={images.ACTIVITY_RATIONALE}
        title="Lesson Rationale"
      >
        {lessonRationale}
      </Section>

      <Section
        color={color}
        icon={images.ACTIVITY_INSTRUCTIONS}
        title="Instructions"
      >
        {instructions}
      </Section>

      <Section
        color={color}
        icon={images.ACTIVITY_PROMPTS}
        title="Prompts"
      >
        {prompts}
      </Section>

      <Section
        color={color}
        icon={images.ACTIVITY_REFLECTION_POINTS}
        title="Reflection Points"
      >
        {reflectionPoints}
      </Section>

      <Section
        color={color}
        icon={images.ACTIVITY_SKILLS_DEVELOPED}
        title="Skills Developed"
      >
        {skillsDeveloped}
      </Section>

      <View style={[styles.shortcuts, { backgroundColor: color }]}>
        <Status style={styles.statusShortcuts} />
        <Action
          style={{ container: styles.actionContainerShortcuts }}
          onPress={() => onSchedulePress(id)}
        />
      </View>
    </ScrollView>
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
  onPress,
}) => (
  <ActionButton style={style} onPress={onPress}>
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
      <Text style={[Text.uppercase, styles.actionText, style.action]}>
        {children}
      </Text>
    </View>
  </TouchableNativeFeedback>
);


const Section = ({
  icon,
  title,
  children,
}) => (
  <View style={styles.section}>
    <View style={styles.sectionHeader}>
      {/* TODO something better here once this has been discussed */}
      <Image source={icon} style={styles.sectionIcon} />
      <Text numberOfLines={1} style={[Text.uppercase, styles.sectionTitle]}>
        {title}
      </Text>
    </View>

    <View style={styles.sectionBody}>
      <Text style={Text.types.paragraph}>{children}</Text>
    </View>
  </View>
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
  onPress: PropTypes.func.isRequired,
};


ActionButton.propTypes = {
  style: PropTypes.object,
  onPress: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};


Section.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};


export default Activity;
