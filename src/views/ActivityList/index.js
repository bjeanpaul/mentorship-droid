import React, { PropTypes } from 'react';

import {
  BaseView, Header, HeaderIcon, Text, ActivityList as ActivityListComponent,
} from 'src/components';


const ActivityList = ({
  category,
  activities,
  onBackPress,
  onActivityPress,
}) => {
  const {
    color,
    title,
  } = category;

  return (
    <BaseView>
      <Header style={{ backgroundColor: color }}>
        <Text style={[Text.types.title, Text.themes.light]}>{title}</Text>

        <HeaderIcon
          uid="back"
          type={HeaderIcon.types.backLight}
          onPress={onBackPress}
        />
      </Header>

      <ActivityListComponent
        category={category}
        activities={activities}
        onActivityPress={onActivityPress}
      />
    </BaseView>
  );
};


ActivityList.propTypes = {
  category: PropTypes.object.isRequired,
  activities: PropTypes.array.isRequired,
  onBackPress: PropTypes.func.isRequired,
  onActivityPress: PropTypes.func.isRequired,
};


export default ActivityList;
