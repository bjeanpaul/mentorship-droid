import { fromPairs } from 'lodash';
import * as constants from 'src/constants/callNote';
import images from 'src/constants/images';


export default fromPairs([
  [constants.CALL_NOTES_MENTEE_HAPPY, images.CALL_NOTES_MENTEE_HAPPY],
  [constants.CALL_NOTES_MENTEE_SAD, images.CALL_NOTES_MENTEE_SAD],
  [constants.CALL_NOTES_MENTEE_BORED, images.CALL_NOTES_MENTEE_BORED],
  [constants.CALL_NOTES_MENTEE_CONFUSED, images.CALL_NOTES_MENTEE_CONFUSED],
  [constants.CALL_NOTES_MENTEE_UPSET, images.CALL_NOTES_MENTEE_UPSET],
  [constants.CALL_NOTES_MENTEE_WITHDRAWN, images.CALL_NOTES_MENTEE_WITHDRAWN],
]);
