import { fromPairs } from 'lodash';

import * as constants from 'src/constants/callNotes';
import CallResult from './CallResult';
import ActivityProgress from './ActivityProgress';
import ObjectiveAchieved from './ObjectiveAchieved';
import Reflection from './Reflection';
import Rating from './Rating';
import Mood from './Mood';
import CallQuality from './CallQuality';

export default fromPairs([
  [constants.V2_STEP_CALL_RESULT, CallResult],
  [constants.V2_STEP_ACTIVITY_PROGRESS, ActivityProgress],
  [constants.V2_STEP_OBJECTIVE_ACHIEVED, ObjectiveAchieved],
  [constants.V2_STEP_REFLECTION, Reflection],
  [constants.V2_STEP_RATING, Rating],
  [constants.V2_STEP_MOOD, Mood],
  [constants.V2_STEP_CALL_QUALITY, CallQuality],
]);
