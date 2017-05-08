import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

const LARGE_CIRCLE_SIZE = 72;

export default StyleSheet.create({
  scrollView: {
    padding: 24,
  },
  titleContainer: {
    borderColor: colors.CALL_NOTE_DETAIL_TITLE_BORDER,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    paddingBottom: 19,
    marginBottom: 18,
  },
  section: {
    marginBottom: 45,
  },
  sectionBody: {
  },
  sectionBodyActivityItems: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityImage: {
    width: 72,
    height: 72,
    marginRight: 16,
    marginBottom: 12,
  },
  menteeStateImage: {
    alignSelf: 'center',
    marginRight: 20,
    borderWidth: 4,
    borderRadius: LARGE_CIRCLE_SIZE,
    width: LARGE_CIRCLE_SIZE,
    height: LARGE_CIRCLE_SIZE,
    borderColor: colors.CALL_NOTE_MOOD_IMAGE_SELECTED_BORDER,
  },
  activityObjective: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
  },
  activityHelpfulText: {
    textAlign: 'center',
  },
  sectionMoodBody: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
