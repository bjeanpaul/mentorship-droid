import { fromPairs } from 'lodash';
import { StyleSheet } from 'react-native';

import { FONT, FONT_WEIGHT } from 'src/constants/styles';
import colors from 'src/constants/colors';


export default StyleSheet.create({
  header: {
    paddingLeft: 16,
    paddingRight: 16,
    height: 72,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: FONT.MEDIUM,
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
});


export const themes = {
  default: StyleSheet.create({
    header: {
      backgroundColor: colors.HEADER_BG_DEFAULT,
    }
  }),
};
