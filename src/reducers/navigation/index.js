import { combineReducers } from 'redux';

import top from 'src/reducers/navigation/top';
import navigator from 'src/reducers/navigation/navigator';
import journey from 'src/reducers/navigation/journey';
import activities from 'src/reducers/navigation/activities';
import scheduledCalls from 'src/reducers/navigation/scheduledCalls';


export default combineReducers({
  top,
  navigator,
  journey,
  activities,
  scheduledCalls,
});
