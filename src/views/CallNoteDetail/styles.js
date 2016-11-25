import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  scrollView: {
    padding: 24,
  },
  titleContainer: {
    borderColor: colors.CALL_NOTE_DETAIL_TITLE_BORDER,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
    paddingBottom: 19,
  },
  section: {
    marginBottom: 45,
  },
  sectionBody: {
    marginTop: 18,
  },
  sectionBodyActivity: {
    flexDirection: 'row',
  },
  activityImage: {
    width: 72,
    height: 72,
    marginRight: 16,
  },
  menteeStateImage: {
    alignSelf: 'center',
  },
  objectiveAchievedImage: {
    alignSelf: 'center',
  },
  activityObjective: {
    paddingTop: 0,
    paddingBottom: 0,
    alignSelf: 'center',
  },
  activityHelpfulText: {
    textAlign: 'center',
  },
});
