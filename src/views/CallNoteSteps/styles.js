import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';


export default StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    margin: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 88,
    height: 88,
  },
  imageHighlight: {
    backgroundColor: colors.CALL_NOTE_MOOD_IMAGE_DARKEN,
    width: 88,
    height: 88,
    borderRadius: 88,
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
});
