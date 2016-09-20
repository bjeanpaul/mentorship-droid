import moment from 'moment';
import React, { PropTypes } from 'react';
import { View, Image } from 'react-native';
import { BaseView, Text, Button, Header, HeaderIcon } from 'src/components';
import images from 'src/constants/images';
import styles from './styles';


const StartCall = ({
  scheduledCall,
  activity,
  onDismissPress,
  onActivatePress,
}) => (
  <BaseView>
    <Header>
      <HeaderIcon
        uid="dismiss"
        type={HeaderIcon.types.dismissDark}
        onPress={onDismissPress}
      />

      <Text style={Text.types.title}>
        {
          scheduledCall
            ? 'Time for your call'
            : 'Call Mentee'
        }
      </Text>
    </Header>

    <View style={styles.body}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={images.START_CALL}
        />
      </View>

      <View style={styles.contentContainer}>
        {
          scheduledCall && <Text style={styles.content}>
            {moment(scheduledCall.time).format('ddd, MMM DD, h:mma')}
          </Text>
        }

        {
          activity && <Text style={styles.content} numberOfLines={2}>
            {activity.title}
          </Text>
        }
      </View>
    </View>

    <View style={styles.footer}>
      <Button
        uid="activate"
        layout={Button.layouts.stretch}
        onPress={onActivatePress}
      >
        ACTIVATE CALL
      </Button>
    </View>
  </BaseView>
);


StartCall.propTypes = {
  scheduledCall: PropTypes.object,
  activity: PropTypes.object,
  onDismissPress: PropTypes.func.isRequired,
  onActivatePress: PropTypes.func.isRequired,
};


export default StartCall;
