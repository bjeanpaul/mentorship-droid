import React, { Component } from 'react-native'

import { Provider } from 'react-redux'
import configureStore from '../stores/configureStore.js'
const store = configureStore()


import RootNavigator from './RootNavigator'


const App = () => {
  return (
    <Provider store={store}>
        <RootNavigator>
        </RootNavigator>
    </Provider>
  )
}

export default App
