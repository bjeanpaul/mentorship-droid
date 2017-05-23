import { mergeAll } from 'lodash/fp';
import { StyleSheet } from 'react-native';

import colors from 'src/constants/colors';
import {
  DEVICE_HEIGHT, DEVICE_HEIGHT_SMALL, DEVICE_HEIGHT_MEDIUM,
} from 'src/constants/styles';

const SMALL_CIRCLE_SIZE = 66;
const LARGE_CIRCLE_SIZE = 77;


export default StyleSheet.create(mergeAll([{
  image: {
    width: SMALL_CIRCLE_SIZE,
    height: SMALL_CIRCLE_SIZE,
    borderRadius: SMALL_CIRCLE_SIZE,
  },
  imageHighlight: {
    backgroundColor: colors.CALL_NOTE_MOOD_IMAGE_DARKEN,
    width: SMALL_CIRCLE_SIZE,
    height: SMALL_CIRCLE_SIZE,
    borderRadius: SMALL_CIRCLE_SIZE,
  },
  imageIsSelected: {
    borderWidth: 4,
    borderColor: colors.CALL_NOTE_MOOD_IMAGE_SELECTED_BORDER,
  },
}, DEVICE_HEIGHT > DEVICE_HEIGHT_SMALL && {
}, DEVICE_HEIGHT > DEVICE_HEIGHT_MEDIUM && {
  image: {
    width: LARGE_CIRCLE_SIZE,
    height: LARGE_CIRCLE_SIZE,
    borderRadius: LARGE_CIRCLE_SIZE,
  },
  imageHighlight: {
    width: LARGE_CIRCLE_SIZE,
    height: LARGE_CIRCLE_SIZE,
    borderRadius: LARGE_CIRCLE_SIZE,
  },
}]));
