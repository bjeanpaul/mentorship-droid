import React from 'react';
import { Provider } from 'react-redux';


import configureStore from 'src/stores/configureStore';
const store = configureStore();

import OnboardingNavigation from 'src/navigation/onboarding/Navigation';

const App = function App() {
  return (
    <Provider store={store}>
      <OnboardingNavigation />
    </Provider>
  );
};
export default App;
