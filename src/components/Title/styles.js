import { StyleSheet } from 'react-native';

import { FONT, FONT_WEIGHT } from 'src/constants/styles';
import colors from 'src/constants/colors';


export default StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: FONT.MEDIUM,
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
});


export const themes = {
  light: StyleSheet.create({
    title: {
      color: colors.TEXT_LIGHT,
    },
  }),
};