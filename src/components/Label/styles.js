import { StyleSheet } from 'react-native';

import { FONT, FONT_WEIGHT } from 'src/constants/styles';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  label: {
    fontFamily: FONT.BOLD,
    fontWeight: FONT_WEIGHT.BOLD,
    fontSize: 14,
    textAlign: 'left',
    color: colors.LABEL_TEXT,
    marginBottom: 9,
  },
});
