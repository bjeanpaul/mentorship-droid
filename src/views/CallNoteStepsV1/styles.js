import { merge } from 'lodash';
import { StyleSheet } from 'react-native';

import { DEVICE_WIDTH, DEVICE_HEIGHT, DEVICE_HEIGHT_SMALL } from 'src/constants/styles';
import colors from 'src/constants/colors';

const SMALL_CIRCLE_SIZE = 66;
const LARGE_CIRCLE_SIZE = 77;

// TODO class names that suck less

export default StyleSheet.create(merge({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: (DEVICE_WIDTH / 3) - 5,
  },
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
  label: {
    fontSize: 18,
    color: colors.CALL_NOTE_MOOD_LABEL,
  },
  completedContainer: {
    flex: 3,
  },
  yesNoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 64,
  },
  ratingContainer: {
    flex: 2,
  },
  callQualityContainer: {
    flex: 2,
  },
  callQualityHintText: {
    color: colors.CALL_NOTE_QUALITY_TEXT,
    fontSize: 14,
    marginLeft: 24,
    marginRight: 24,
  },
}, DEVICE_HEIGHT > DEVICE_HEIGHT_SMALL && {
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
}));
