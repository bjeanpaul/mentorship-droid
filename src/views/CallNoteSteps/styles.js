import { merge } from 'lodash';
import { StyleSheet } from 'react-native';

import { DEVICE_HEIGHT, DEVICE_HEIGHT_SMALL } from 'src/constants/styles';
import colors from 'src/constants/colors';


export default StyleSheet.create(merge({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 66,
    height: 66,
  },
  imageHighlight: {
    backgroundColor: colors.CALL_NOTE_MOOD_IMAGE_DARKEN,
    width: 66,
    height: 66,
    borderRadius: 66,
  },
  imageIsSelected: {
    borderWidth: 4,
    borderColor: colors.CALL_NOTE_MOOD_IMAGE_SELECTED_BORDER,
    backgroundColor: 'transparent',
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
  objectiveContainer: {
    flex: 1,
    margin: 24,
    borderColor: colors.CALL_NOTE_OBJECTIVE_CONTAINER,
    borderWidth: 1,
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
    width: 77,
    height: 77,
  },
  imageHighlight: {
    width: 77,
    height: 77,
    borderRadius: 77,
  },
}));
