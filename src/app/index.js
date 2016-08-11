import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';


import configureStore from 'src/stores/configureStore';
const store = configureStore();

import C from 'src/schedule/ScheduleList';

const App = function App() {
  return (
    <Provider store={store}>
      <C
        calls={[
          {
            date: '2016-08-11',
            activityName: 'Problem',
          },
          {
            date: '2016-08-12',
            activityName: 'Sausage',
          },
          {
            date: '2016-08-13',
            activityName: 'Test',
          },
        ]}
      />
    </Provider>
  );
};
export default App;
