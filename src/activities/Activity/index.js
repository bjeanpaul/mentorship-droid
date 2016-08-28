import React, { PropTypes } from 'react';
import { View } from 'react-native';

import { BaseView, Header, HeaderIcon, Text } from 'src/components';


const Activity = ({
  category: { color },
  activity: { title },
  onBackPress,
}) => (
  <BaseView>
    <Header style={{ backgroundColor: color }}>
      <HeaderIcon
        uid='back'
        type={HeaderIcon.types.backLight}
        onPress={onBackPress}
      />

      <Text style={[Text.types.title, Text.themes.light]}>{title}</Text>
    </Header>
  </BaseView>
);


Activity.propTypes = {
  category: PropTypes.object.isRequired,
  activity: PropTypes.object.isRequired,
  onBackPress: PropTypes.func.isRequired,
};


export default Activity;
