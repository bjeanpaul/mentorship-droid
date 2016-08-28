import React, { PropTypes } from 'react';

import { BaseView, Header, Text } from 'src/components';


const Activity = ({
  category: { color },
  activity: { title },
}) => (
  <BaseView>
    <Header style={{ backgroundColor: color }}>
      <Text style={[Text.types.title, Text.themes.light]}>{title}</Text>
    </Header>
  </BaseView>
);


Activity.propTypes = {
  category: PropTypes.object.isRequired,
  activity: PropTypes.object.isRequired,
};


export default Activity;
