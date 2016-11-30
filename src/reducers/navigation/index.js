import { combineReducers } from 'redux';

import top from 'src/reducers/navigation/top';
import navigator from 'src/reducers/navigation/navigator';


export default combineReducers({
  top,
  navigator,
});
