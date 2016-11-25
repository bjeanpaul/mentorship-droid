import { fromPairs } from 'lodash';
import images from 'src/constants/images';

const CALL_NOTE_LIST_REQUEST = 'CALL_NOTE_LIST_REQUEST';
const CALL_NOTE_LIST_SUCCESS = 'CALL_NOTE_LIST_SUCCESS';
const CALL_NOTE_LIST_FAILURE = 'CALL_NOTE_LIST_FAILURE';

const CALL_NOTE_CREATE_REQUEST = 'CALL_NOTE_CREATE_REQUEST';
const CALL_NOTE_CREATE_SUCCESS = 'CALL_NOTE_CREATE_SUCCESS';

const CALL_NOTE_UPDATE_REQUEST = 'CALL_NOTE_UPDATE_REQUEST';
const CALL_NOTE_UPDATE_SUCCESS = 'CALL_NOTE_UPDATE_SUCCESS';
const CALL_NOTE_UPDATE_FAILURE = 'CALL_NOTE_UPDATE_FAILURE';

const CALL_NOTE_PATCH_REQUEST = 'CALL_NOTE_PATCH_REQUEST';
const CALL_NOTE_PATCH_SUCCESS = 'CALL_NOTE_PATCH_SUCCESS';
const CALL_NOTE_PATCH_FAILURE = 'CALL_NOTE_PATCH_FAILURE';

const CALL_NOTES_MENTEE_HAPPY = 'happy';
const CALL_NOTES_MENTEE_SAD = 'sad';
const CALL_NOTES_MENTEE_BORED = 'bored';
const CALL_NOTES_MENTEE_CONFUSED = 'confused';
const CALL_NOTES_MENTEE_UPSET = 'upset';
const CALL_NOTES_MENTEE_WITHDRAWN = 'withdrawn';

const CALL_NOTE_CREATE_OPEN = 'CALL_NOTE_CREATE_OPEN';
const CALL_NOTES_CHANGE_CALL_NOTE = 'CALL_NOTES_CHANGE_CALL_NOTE';

const CALL_NOTES_VIEW_ALL = 'CALL_NOTES_VIEW_ALL';

const CALL_NOTE_CHOOSE = 'CALL_NOTE_CHOOSE';

const MOOD_IMAGES = fromPairs([
  [CALL_NOTES_MENTEE_HAPPY, images.CALL_NOTES_MENTEE_HAPPY],
  [CALL_NOTES_MENTEE_SAD, images.CALL_NOTES_MENTEE_SAD],
  [CALL_NOTES_MENTEE_BORED, images.CALL_NOTES_MENTEE_BORED],
  [CALL_NOTES_MENTEE_CONFUSED, images.CALL_NOTES_MENTEE_CONFUSED],
  [CALL_NOTES_MENTEE_UPSET, images.CALL_NOTES_MENTEE_UPSET],
  [CALL_NOTES_MENTEE_WITHDRAWN, images.CALL_NOTES_MENTEE_WITHDRAWN],
]);


const EVENT_MOOD_IMAGES = fromPairs([
  [CALL_NOTES_MENTEE_HAPPY, images.EVENT_MENTEE_HAPPY],
  [CALL_NOTES_MENTEE_SAD, images.EVENT_MENTEE_SAD],
  [CALL_NOTES_MENTEE_BORED, images.EVENT_MENTEE_BORED],
  [CALL_NOTES_MENTEE_CONFUSED, images.EVENT_MENTEE_CONFUSED],
  [CALL_NOTES_MENTEE_UPSET, images.EVENT_MENTEE_UPSET],
  [CALL_NOTES_MENTEE_WITHDRAWN, images.EVENT_MENTEE_WITHDRAWN],
]);


const CALL_QUALITY_EXCELLENT = 'EXCELLENT';
const CALL_QUALITY_OK = 'OK';
const CALL_QUALITY_INAUDIBLE = 'INAUDIBLE';
const CALL_QUALITY_DROPPED = 'DROPPED';
const CALL_QUALITY_DELAYED = 'DELAYED';


const RATING_ITEMS = [
  'Not at all',
  'A little',
  'Somewhat',
  'Quite a bit',
  'A lot',
];


const CALL_QUALITY_ITEMS = fromPairs([
  [CALL_QUALITY_EXCELLENT, 'Excellent'],
  [CALL_QUALITY_OK, 'Ok'],
  [CALL_QUALITY_INAUDIBLE, "Couldn't hear"],
  [CALL_QUALITY_DROPPED, 'Call dropped'],
  [CALL_QUALITY_DELAYED, 'Delays'],
]);


export {
  CALL_NOTE_LIST_REQUEST,
  CALL_NOTE_LIST_SUCCESS,
  CALL_NOTE_LIST_FAILURE,

  CALL_NOTE_CREATE_REQUEST,
  CALL_NOTE_CREATE_SUCCESS,

  CALL_NOTE_UPDATE_REQUEST,
  CALL_NOTE_UPDATE_SUCCESS,
  CALL_NOTE_UPDATE_FAILURE,

  CALL_NOTE_PATCH_REQUEST,
  CALL_NOTE_PATCH_SUCCESS,
  CALL_NOTE_PATCH_FAILURE,

  CALL_NOTES_MENTEE_HAPPY,
  CALL_NOTES_MENTEE_SAD,
  CALL_NOTES_MENTEE_BORED,
  CALL_NOTES_MENTEE_CONFUSED,
  CALL_NOTES_MENTEE_UPSET,
  CALL_NOTES_MENTEE_WITHDRAWN,

  CALL_NOTE_CREATE_OPEN,
  CALL_NOTES_CHANGE_CALL_NOTE,

  CALL_NOTES_VIEW_ALL,

  CALL_NOTE_CHOOSE,

  MOOD_IMAGES,
  EVENT_MOOD_IMAGES,

  CALL_QUALITY_EXCELLENT,
  CALL_QUALITY_OK,
  CALL_QUALITY_INAUDIBLE,
  CALL_QUALITY_DROPPED,
  CALL_QUALITY_DELAYED,

  RATING_ITEMS,
  CALL_QUALITY_ITEMS,
};
