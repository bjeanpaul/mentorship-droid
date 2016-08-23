import { combineReducers } from 'redux';
import entities from 'src/reducers/entities';
import auth from 'src/auth/reducer';
import navigation from 'src/navigation/reducer';
import profile from 'src/profile/reducer';


const rootReducer = combineReducers({
  entities,
  auth,
  profile,
  navigation,
});


export default rootReducer;
