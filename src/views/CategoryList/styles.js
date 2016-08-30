import { StyleSheet } from 'react-native';

import { FONT, FONT_WEIGHT } from 'src/constants/styles';


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
  },
});
