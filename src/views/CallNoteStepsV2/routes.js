import { fromPairs } from 'lodash';

import * as constants from 'src/constants/callNotes';
import CallResult from './CallResult';
import UnplannedActivityCheck from './UnplannedActivityCheck';
import PlannedActivityProgress from './PlannedActivityProgress';
import UnplannedActivityProgress from './UnplannedActivityProgress';
import ObjectiveAchieved from './ObjectiveAchieved';
import Reflection from './Reflection';
import Rating from './Rating';
import Mood from './Mood';
import CallQuality from './CallQuality';

export default fromPairs([
  [constants.V2_STEP_CALL_RESULT, CallResult],
  [constants.V2_STEP_UNPLANNED_ACTIVITY_CHECK, UnplannedActivityCheck],
  [constants.V2_STEP_PLANNED_ACTIVITY_PROGRESS, PlannedActivityProgress],
  [constants.V2_STEP_UNPLANNED_ACTIVITY_PROGRESS, UnplannedActivityProgress],
  [constants.V2_STEP_OBJECTIVE_ACHIEVED, ObjectiveAchieved],
  [constants.V2_STEP_REFLECTION, Reflection],
  [constants.V2_STEP_RATING, Rating],
  [constants.V2_STEP_MOOD, Mood],
  [constants.V2_STEP_CALL_QUALITY, CallQuality],
]);
