import { StyleSheet } from 'react-native';
import { FONT } from 'src/constants/styles';
import colors from 'src/constants/colors';


export default StyleSheet.create({
  heading: {
    height: 96,
    backgroundColor: colors.CATEGORY_LIST_HEADING_BG,
    justifyContent: 'center',
  },
  list: {
    flex: 1
  },
  category: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: FONT.MEDIUM,
    color: colors.CATEGORY_LIST_TEXT,
  },
});
