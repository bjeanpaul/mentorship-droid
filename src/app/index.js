import React from 'react';
import { Provider } from 'react-redux';


import configureStore from 'src/stores/configureStore';
const store = configureStore();

import OnboardingNavigatorContainer from 'src/navigation/onboarding/NavigatorContainer';

const App = function App() {
  return (
    <Provider store={store}>
      <OnboardingNavigatorContainer />
    </Provider>
  );
};
export default App;
