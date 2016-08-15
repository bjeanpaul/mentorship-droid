import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  baseView: {
    backgroundColor: colors.OVERLAY_BG,
  },
  content: {
    flex: 0.7,
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    height: 80,
    width: 80,
  },
  footer: {
    paddingBottom: 16,
    flex: 0.3,
    justifyContent: 'flex-end',
  },
  dismissButton: {
    position: 'absolute',
    left: 16,
    top: 16,
  },
  title: {
    fontSize: 20,
    color: colors.OVERLAY_TEXT,
  },
  message: {
    fontSize: 24,
    color: colors.OVERLAY_MESSAGE,
  },
  footerText: {
    margin: 16,
    marginBottom: 0,
    fontSize: 14,
  },
});
