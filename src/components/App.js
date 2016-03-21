import React from 'react-native';
import { Provider } from 'react-redux';

import configureStore from '../stores/configureStore';
const store = configureStore();


console.log('----------------------------')
import { login } from '../mentor/MentorActions';
store.dispatch(login('admin', '123'));
console.log('----------------------------')


import RootNavigator from './RootNavigator';



const App = function App() {
  return (
    <Provider store={store}>
        <RootNavigator />
    </Provider>
  );
};

export default App;
