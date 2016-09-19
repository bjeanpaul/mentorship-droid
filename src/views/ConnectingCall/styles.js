import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';


export default StyleSheet.create({
  base: {
    backgroundColor: colors.OVERLAY_BG,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 64,
    paddingLeft: 24,
    paddingRight: 24,
  },
  title: {
    fontSize: 20,
    color: colors.OVERLAY_TEXT,
  },
  hint: {
    fontSize: 24,
  },
  footer: {
    padding: 24,
    justifyContent: 'center',
  },
});
