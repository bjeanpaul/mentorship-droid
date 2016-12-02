import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';


export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  patternContainer: {
    position: 'absolute',
    backgroundColor: colors.BG_PATTERN,
  },
});
