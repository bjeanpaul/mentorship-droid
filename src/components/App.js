import React from 'react-native';
import { Provider } from 'react-redux';

import configureStore from '../stores/configureStore';
const store = configureStore();

import RootNavigator from './RootNavigator';

const App = function App() {
  return (
    <Provider store={store}>
        <RootNavigator />
    </Provider>
  );
};

export default App;
