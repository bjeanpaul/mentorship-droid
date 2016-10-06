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
    marginBottom: 19,
  },
  activityContainer: {
    flexDirection: 'row',
    marginBottom: 19,
  },
  activityImage: {
    width: 72,
    height: 72,
    marginRight: 16,
  },
  activityObjective: {
    paddingTop: 0,
    paddingBottom: 0,
    alignSelf: 'center',
  },
  sectionBottomMargin: {
    marginBottom: 45,
  },
  alignCenter: {
    alignSelf: 'center',
  },
});
