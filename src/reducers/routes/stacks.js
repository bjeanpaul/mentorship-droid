import { fromPairs } from 'lodash';
import { combineReducers } from 'redux';

import landing from 'src/reducers/routes/landing';
import activities from 'src/reducers/routes/activities';
import onboarding from 'src/reducers/routes/onboarding';
import journey from 'src/reducers/routes/journey';
import scheduledCalls from 'src/reducers/routes/scheduledCalls';
import * as routes from 'src/constants/routes';


export default combineReducers(fromPairs([
  [routes.STACK_LANDING, landing],
  [routes.STACK_ACTIVITIES, activities],
  [routes.STACK_ONBOARDING, onboarding],
  [routes.STACK_JOURNEY, journey],
  [routes.STACK_SCHEDULED_CALLS, scheduledCalls],
]));
