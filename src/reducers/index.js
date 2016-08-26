import { combineReducers } from 'redux';
import entities from 'src/reducers/entities';
import auth from 'src/auth/reducer';
import navigation from 'src/navigation/reducer';
import profile from 'src/profile/reducer';
import onboarding from 'src/onboarding/reducer';


const rootReducer = combineReducers({
  onboarding,
  entities,
  auth,
  profile,
  navigation,
});


export default rootReducer;
