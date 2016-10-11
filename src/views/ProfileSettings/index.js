import React, { PropTypes } from 'react';
import { View } from 'react-native';

import styles from './styles';
import { BaseView, Text, Header, HeaderIcon } from 'src/components';


const Profile = ({
  onBackPress,
}) => (
  <BaseView>
    <Header>
      <Text style={Text.types.title}>Profile</Text>

      <HeaderIcon
        uid="back"
        type={HeaderIcon.types.backDark}
        onPress={onBackPress}
      />
    </Header>

    <View style={styles.container} />
  </BaseView>
);


Profile.propTypes = {
  onBackPress: PropTypes.func.isRequired,
};


export default Profile;
