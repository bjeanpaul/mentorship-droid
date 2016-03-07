import React, { Component } from 'react-native'

import { Provider } from 'react-redux'
import configureStore from '../stores/configureStore.js'
const store = configureStore()


import RootNavigator from './RootNavigator'

// we can pass the initial stack down as a property to the root navigator; and we
// can use the store here to determine what that stack should look like?

const App = () => {
  return (
    <Provider store={store}>
        <RootNavigator>
        </RootNavigator>
    </Provider>
  )
}

export default App
