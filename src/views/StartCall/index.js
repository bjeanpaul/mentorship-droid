import moment from 'moment';
import React, { PropTypes } from 'react';
import { View, Image } from 'react-native';
import { BaseView, Text, Button, Header, HeaderIcon } from 'src/components';
import images from 'src/constants/images';
import styles from './styles';


const StartCall = ({
  callTime,
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
          callTime
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
          callTime && <Text style={Text.types.secondaryTitle}>
            {moment(callTime).format('ddd, MMM DD, h:mma')}
          </Text>
        }

        {
          activity && <Text style={Text.types.secondaryTitle} numberOfLines={2}>
            {activity.title}
          </Text>
        }
      </View>
    </View>

    <View style={styles.footer}>
      <Button uid="activate" layout={Button.layouts.stretch} onPress={onActivatePress}>
        <Text style={[Text.themes.light, Text.uppercase]}>Activate Call</Text>
      </Button>
    </View>
  </BaseView>
);


StartCall.propTypes = {
  callTime: PropTypes.number,
  activity: PropTypes.object,
  onDismissPress: PropTypes.func.isRequired,
  onActivatePress: PropTypes.func.isRequired,
};


export default StartCall;
