import { combineReducers } from 'redux';
import entities from 'src/reducers/entities';
import auth from 'src/auth/reducer';


const rootReducer = combineReducers({
  entities,
  auth,
});


export default rootReducer;
