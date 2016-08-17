import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  baseView: {
    padding: 24,
    backgroundColor: colors.OVERLAY_BG,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dismissButton: {
    position: 'absolute',
    left: 16,
    top: 16,
  },
  title: {
    fontSize: 20,
    color: colors.OVERLAY_TEXT,
    paddingBottom: 80,
  },
});
