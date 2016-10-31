import moment from 'moment';
import React, { PropTypes } from 'react';
import { Image, View } from 'react-native';

import images from 'src/constants/images';
import { BaseView, Header, HeaderIcon, Text, Button } from 'src/components';
import styles from 'src/views/CallNoteSaved/styles';


const CallNoteSaved = ({
  callNote: { callStartTime },
  activity,
  onDismissPress,
  onScheduleNextPress,
}) => (
  <BaseView style={styles.base}>
    <Header>
      {
        onDismissPress && <HeaderIcon
          uid="dismiss"
          type={HeaderIcon.types.dismissLight}
          onPress={onDismissPress}
        />
      }
    </Header>

    <View style={styles.body}>
      <View style={styles.contentContainer}>
        <Image source={images.OVERLAY_DONE} />
        <Text style={styles.title}>Call notes saved for:</Text>

        <Text style={[Text.themes.light, styles.message]}>
          {moment(callStartTime).format('ddd, MMM D, h:mm a')}
        </Text>

        {
          activity && <Text
            numberOfLines={1}
            style={[Text.themes.light, styles.message]}
          >
            {activity.title}
          </Text>
        }
      </View>

      <View style={styles.actionContainer}>
        <Button
          uid="scheduleNext"
          theme={Button.themes.light}
          layout={Button.layouts.stretch}
          onPress={() => onScheduleNextPress(callStartTime)}
        >
          CALL SAME TIME NEXT WEEK?
        </Button>
    </View>
    </View>
  </BaseView>
);


CallNoteSaved.propTypes = {
  callNote: PropTypes.object.isRequired,
  activity: PropTypes.object,
  onDismissPress: PropTypes.func.isRequired,
  onScheduleNextPress: PropTypes.func.isRequired,
};


export default CallNoteSaved;
