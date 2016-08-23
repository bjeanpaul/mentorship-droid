import React from 'react';
import { Provider } from 'react-redux';


import configureStore from 'src/stores/configureStore';
const store = configureStore();

import RootNavigation from 'src/navigation/NavigationStackContainer';

const App = function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};
export default App;
