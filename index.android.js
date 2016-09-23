import React from 'react';
import ScheduleList from 'src/views/ScheduleList';
import { AppRegistry } from 'react-native';

AppRegistry.registerComponent('app', () => () => (
  <ScheduleList
    onCallChosen={() => null}
    calls={[{
      callTime: '2016-09-21T19:40:09.880Z',
    }, {
      callTime: '2016-09-23T19:40:09.880Z',
      activity: {
        title: 'Activity 23',
      },
    }]}
  />
));
