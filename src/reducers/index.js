import { combineReducers } from 'redux';
import entities from 'src/reducers/entities';
import auth from 'src/reducers/auth';
import navigation from 'src/reducers/navigation';
import onboarding from 'src/reducers/onboarding';
import callNote from 'src/reducers/callNote';
import tick from 'src/reducers/tick';


const rootReducer = combineReducers({
  callNote,
  onboarding,
  entities,
  auth,
  navigation,
  tick,
});


export default rootReducer;
