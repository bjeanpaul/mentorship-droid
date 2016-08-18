import React from 'react';
import { Provider } from 'react-redux';


import configureStore from 'src/stores/configureStore';
const store = configureStore();

import LandingContainer from 'src/onboarding/LandingContainer';

const App = function App() {
  return (
    <Provider store={store}>
      <LandingContainer />
    </Provider>
  );
};
export default App;
