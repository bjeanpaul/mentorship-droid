import { combineReducers } from 'redux';
import auth from './auth/reducer';
import onboarding from './onboarding/reducer';


export default combineReducers({
  auth,
  onboarding,
});
