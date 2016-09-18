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
  },
  title: {
    fontSize: 20,
    color: colors.OVERLAY_TEXT,
  },
});
