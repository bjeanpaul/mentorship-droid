import React from 'react-native';
import { Provider } from 'react-redux';

import configureStore from '../stores/configureStore';

const initialState = { mentor: { authToken: 'YWRtaW46MTIz' } };
const store = configureStore(initialState);

import RootNavigator from './RootNavigator';

const App = function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
