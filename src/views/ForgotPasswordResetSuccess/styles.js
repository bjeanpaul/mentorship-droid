import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  base: {
    backgroundColor: colors.OVERLAY_BG,
  },
  body: {
    flex: 1,
    paddingTop: 14,
    paddingLeft: 24,
    paddingRight: 24,
  },
  contentContainer: {
    alignItems: 'center',
    flex: 0.7,
  },
  actionContainer: {
    flex: 0.3,
  },
  title: {
    fontSize: 20,
    color: colors.OVERLAY_TITLE,
    paddingBottom: 10,
  },
  message: {
    fontSize: 24,
    paddingBottom: 14,
  },
});
