import { StyleSheet } from 'react-native';

import colors from 'src/constants/colors';
import { FONT, FONT_WEIGHT } from 'src/constants/styles';


export default StyleSheet.create({
  text: {
    color: colors.DEFAULT_TEXT,
    fontFamily: FONT.REGULAR,
    fontSize: 13,
    textAlign: 'center',
  },
});


export const types = StyleSheet.create({
  paragraph: {
    textAlign: 'left',
    fontSize: 18,
    paddingTop: 18,
    paddingBottom: 12,
  },

  sectionTitle: {
    color: colors.SECTION_TITLE_TEXT,
    fontSize: 12,
    letterSpacing: 1,
    textAlign: 'left',
    fontFamily: FONT.BOLD,
    fontWeight: FONT_WEIGHT.BOLD,
  },
});


export const STYLE_TRANSFORMS = new Map([
  [types.sectionTitle, 'uppercase'],
]);
