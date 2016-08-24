import { StyleSheet } from 'react-native';

import { FONT, FONT_WEIGHT } from 'src/constants/styles';
import colors from 'src/constants/colors';


export default StyleSheet.create({
  list: {
    flex: 1,
  },
  category: {
    flex: 1,
    justifyContent: 'center',
  },
  categoryTitle: {
    fontSize: 20,
    fontFamily: FONT.MEDIUM,
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: colors.TEXT_LIGHT,
  }
});
