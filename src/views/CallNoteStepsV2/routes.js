import { fromPairs } from 'lodash';

import * as constants from 'src/constants/callNotesV2';
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
  [constants.STEP_CALL_RESULT, CallResult],
  [constants.STEP_UNPLANNED_ACTIVITY_CHECK, UnplannedActivityCheck],
  [constants.STEP_PLANNED_ACTIVITY_PROGRESS, PlannedActivityProgress],
  [constants.STEP_UNPLANNED_ACTIVITY_PROGRESS, UnplannedActivityProgress],
  [constants.STEP_OBJECTIVE_ACHIEVED, ObjectiveAchieved],
  [constants.STEP_REFLECTION, Reflection],
  [constants.STEP_RATING, Rating],
  [constants.STEP_MOOD, Mood],
  [constants.STEP_CALL_QUALITY, CallQuality],
]);
