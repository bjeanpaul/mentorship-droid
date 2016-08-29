import { combineReducers } from 'redux';
import entities from 'src/reducers/entities';
import auth from 'src/reducers/auth';
import navigation from 'src/reducers/navigation';
import profile from 'src/reducers/profile';
import onboarding from 'src/reducers/onboarding';


const rootReducer = combineReducers({
  onboarding,
  entities,
  auth,
  profile,
  navigation,
});


export default rootReducer;
