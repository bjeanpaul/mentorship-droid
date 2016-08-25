import { StyleSheet } from 'react-native';

import { FONT, FONT_WEIGHT } from 'src/constants/styles';
import colors from 'src/constants/colors';


export default StyleSheet.create({
  title: {
    color: colors.SECTION_TITLE_TEXT,
    fontSize: 12,
    letterSpacing: 1,
    textAlign: 'left',
    fontFamily: FONT.BOLD,
    fontWeight: FONT_WEIGHT.BOLD,
  },
});
