import { fromPairs } from 'lodash';
import images from 'src/constants/images';


export const CALL_NOTE_LIST_REQUEST = 'CALL_NOTE_LIST_REQUEST';
export const CALL_NOTE_LIST_SUCCESS = 'CALL_NOTE_LIST_SUCCESS';
export const CALL_NOTE_LIST_FAILURE = 'CALL_NOTE_LIST_FAILURE';

export const CALL_NOTE_CREATE_REQUEST = 'CALL_NOTE_CREATE_REQUEST';
export const CALL_NOTE_CREATE_SUCCESS = 'CALL_NOTE_CREATE_SUCCESS';

export const CALL_NOTE_UPDATE_REQUEST = 'CALL_NOTE_UPDATE_REQUEST';
export const CALL_NOTE_UPDATE_SUCCESS = 'CALL_NOTE_UPDATE_SUCCESS';
export const CALL_NOTE_UPDATE_FAILURE = 'CALL_NOTE_UPDATE_FAILURE';

export const CALL_NOTES_MENTEE_HAPPY = 'happy';
export const CALL_NOTES_MENTEE_SAD = 'sad';
export const CALL_NOTES_MENTEE_BORED = 'bored';
export const CALL_NOTES_MENTEE_CONFUSED = 'confused';
export const CALL_NOTES_MENTEE_UPSET = 'upset';
export const CALL_NOTES_MENTEE_WITHDRAWN = 'withdrawn';
export const CALL_NOTES_MENTEE_EXCITED = 'excited';
export const CALL_NOTES_MENTEE_ENGAGED = 'engaged';

export const CALL_NOTE_CREATE_OPEN = 'CALL_NOTE_CREATE_OPEN';
export const CALL_NOTE_RETROACTIVELY_CREATE_OPEN = 'CALL_NOTE_RETROACTIVELY_CREATE_OPEN';
export const CALL_NOTES_CHANGE_CALL_NOTE = 'CALL_NOTES_CHANGE_CALL_NOTE';

export const CALL_NOTES_VIEW_ALL = 'CALL_NOTES_VIEW_ALL';

export const CALL_NOTE_CHOOSE = 'CALL_NOTE_CHOOSE';

export const ADD_RETROACTIVELY = 'ADD_RETROACTIVELY';
export const ADD_IMMEDIATE = 'ADD_IMMEDIATE';

export const MOOD_IMAGES = fromPairs([
  [CALL_NOTES_MENTEE_HAPPY, images.CALL_NOTES_MENTEE_HAPPY],
  [CALL_NOTES_MENTEE_SAD, images.CALL_NOTES_MENTEE_SAD],
  [CALL_NOTES_MENTEE_BORED, images.CALL_NOTES_MENTEE_BORED],
  [CALL_NOTES_MENTEE_CONFUSED, images.CALL_NOTES_MENTEE_CONFUSED],
  [CALL_NOTES_MENTEE_UPSET, images.CALL_NOTES_MENTEE_UPSET],
  [CALL_NOTES_MENTEE_WITHDRAWN, images.CALL_NOTES_MENTEE_WITHDRAWN],
]);

export const MOOD_IMAGES_V2 = Object.assign({}, MOOD_IMAGES, fromPairs([
  [CALL_NOTES_MENTEE_EXCITED, images.CALL_NOTES_MENTEE_EXCITED],
  [CALL_NOTES_MENTEE_ENGAGED, images.CALL_NOTES_MENTEE_ENGAGED],
]));

export const EVENT_MOOD_IMAGES = fromPairs([
  [CALL_NOTES_MENTEE_HAPPY, images.EVENT_MENTEE_HAPPY],
  [CALL_NOTES_MENTEE_SAD, images.EVENT_MENTEE_SAD],
  [CALL_NOTES_MENTEE_BORED, images.EVENT_MENTEE_BORED],
  [CALL_NOTES_MENTEE_CONFUSED, images.EVENT_MENTEE_CONFUSED],
  [CALL_NOTES_MENTEE_UPSET, images.EVENT_MENTEE_UPSET],
  [CALL_NOTES_MENTEE_WITHDRAWN, images.EVENT_MENTEE_WITHDRAWN],
  [CALL_NOTES_MENTEE_EXCITED, images.EVENT_MENTEE_EXCITED],
  [CALL_NOTES_MENTEE_ENGAGED, images.EVENT_MENTEE_ENGAGED],
]);

export const CALL_QUALITY_EXCELLENT = 'EXCELLENT';
export const CALL_QUALITY_OK = 'OK';
export const CALL_QUALITY_INAUDIBLE = 'INAUDIBLE';
export const CALL_QUALITY_DROPPED = 'DROPPED';
export const CALL_QUALITY_DELAYED = 'DELAYED';

export const RATING_ITEMS = [
  'Not at all',
  'A little',
  'Somewhat',
  'Quite a bit',
  'A lot',
];

export const CALL_QUALITY_ITEMS = fromPairs([
  [CALL_QUALITY_EXCELLENT, 'Excellent'],
  [CALL_QUALITY_OK, 'Ok'],
  [CALL_QUALITY_INAUDIBLE, "Couldn't hear"],
  [CALL_QUALITY_DROPPED, 'Call dropped'],
  [CALL_QUALITY_DELAYED, 'Delays'],
]);


export const V2_STEP_BACK = 'V2_STEP_BACK';
export const V2_STEP_NEXT = 'V2_STEP_NEXT';

export const V2_STEP_CALL_RESULT = 'V2_STEP_CALL_RESULT';
export const V2_STEP_UNPLANNED_ACTIVITY_CHECK = 'V2_STEP_UNPLANNED_ACTIVITY_CHECK';
export const V2_STEP_PLANNED_ACTIVITY_PROGRESS = 'V2_STEP_PLANNED_ACTIVITY_PROGRESS';
export const V2_STEP_UNPLANNED_ACTIVITY_PROGRESS = 'V2_STEP_UNPLANNED_ACTIVITY_PROGRESS';
export const V2_STEP_OBJECTIVE_ACHIEVED = 'V2_STEP_OBJECTIVE_ACHIEVED';
export const V2_STEP_REFLECTION = 'V2_STEP_REFLECTION';
export const V2_STEP_RATING = 'V2_STEP_RATING';
export const V2_STEP_MOOD = 'V2_STEP_MOOD';
export const V2_STEP_CALL_QUALITY = 'V2_STEP_CALL_QUALITY';

export const V2_STEPS_WITHOUT_ACTIVITY = [
  V2_STEP_CALL_RESULT,
  V2_STEP_UNPLANNED_ACTIVITY_CHECK,
  V2_STEP_UNPLANNED_ACTIVITY_PROGRESS,
  V2_STEP_OBJECTIVE_ACHIEVED,
  V2_STEP_REFLECTION,
  V2_STEP_RATING,
  V2_STEP_MOOD,
  V2_STEP_CALL_QUALITY,
];

export const V2_STEPS_WITH_ACTIVITY = [
  V2_STEP_CALL_RESULT,
  V2_STEP_PLANNED_ACTIVITY_PROGRESS,
  V2_STEP_UNPLANNED_ACTIVITY_PROGRESS,
  V2_STEP_OBJECTIVE_ACHIEVED,
  V2_STEP_REFLECTION,
  V2_STEP_RATING,
  V2_STEP_MOOD,
  V2_STEP_CALL_QUALITY,
];
