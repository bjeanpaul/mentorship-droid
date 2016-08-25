import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';


export default StyleSheet.create({
  bar: {
    height: 6,
    flexDirection: 'row',
    backgroundColor: colors.PROGRESS_BAR_BG,
  },
  completed: {
    backgroundColor: colors.PROGRESS_INDICATOR_BG,
  },
});
