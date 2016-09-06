import { combineReducers } from 'redux';
import entities from 'src/reducers/entities';
import auth from 'src/reducers/auth';
import routes from 'src/reducers/routes';
import profile from 'src/reducers/profile';
import onboarding from 'src/reducers/onboarding';


const rootReducer = combineReducers({
  onboarding,
  entities,
  auth,
  profile,
  routes,
});


export default rootReducer;
