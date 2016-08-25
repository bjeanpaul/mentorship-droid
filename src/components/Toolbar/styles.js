import { StyleSheet } from 'react-native';

import { FONT, FONT_WEIGHT } from 'src/constants/styles';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  toolbar: {
    paddingLeft: 16,
    paddingRight: 16,
    height: 72,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 20,
    fontFamily: FONT.MEDIUM,
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: colors.TOOLBAR_TITLE,
  },
});
