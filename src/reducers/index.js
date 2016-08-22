import { combineReducers } from 'redux';
import entities from 'src/reducers/entities';
import auth from 'src/auth/reducer';
import navigation from 'src/navigation/reducer';


const rootReducer = combineReducers({
  entities,
  auth,
  navigation,
});


export default rootReducer;
