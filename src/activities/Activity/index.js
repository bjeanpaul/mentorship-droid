import React, { PropTypes } from 'react';
import { Image } from 'react-native';

import { BaseView, Header, HeaderIcon, Text } from 'src/components';
import styles from './styles';


const Activity = ({
  category: { color },
  activity: {
    title,
    poster,
  },
  onBackPress,
}) => (
  <BaseView>
    <Header style={{ backgroundColor: color }}>
      <HeaderIcon
        uid="back"
        type={HeaderIcon.types.backLight}
        onPress={onBackPress}
      />

      <Text style={[Text.types.title, Text.themes.light]}>{title}</Text>
    </Header>

    {
      poster
        ? <Image
          source={{ uri: poster }}
          style={[styles.poster, { backgroundColor: color }]}
        />
        : null
    }
  </BaseView>
);


Activity.propTypes = {
  category: PropTypes.object.isRequired,
  activity: PropTypes.object.isRequired,
  onBackPress: PropTypes.func.isRequired,
};


export default Activity;
