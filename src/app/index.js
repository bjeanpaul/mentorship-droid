import { View, Text } from 'react-native';
import React, { Component } from 'react';

import { Provider } from 'react-redux';

import configureStore from '../stores/configureStore';
const initialState = { mentor: { authToken: 'YWRtaW46MTIz' } };
const store = configureStore(initialState);


import { Router, Route, StacksRoute } from 'react-router-native';


// TODO: Use React-Native-Router


const App = function App() {
  return (
    <Provider store={store}>
      <Router addressBar={true}>
        <Route path="/" component={About} overlayComponent={AboutHeader}/>
      </Router>
    </Provider>
  );
};

export default App;
