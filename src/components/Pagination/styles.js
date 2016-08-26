import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';
import { FONT, FONT_WEIGHT } from 'src/constants/styles';

export default StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: FONT.BOLD,
    fontWeight: FONT_WEIGHT.BOLD,
    fontSize: 13,
    letterSpacing: 1,
    marginTop: 15,
    marginBottom: 17,
  },
  labelDefault: {
    color: colors.BUTTON_LABEL,
  },
  labelWhite: {
    color: colors.BUTTON_ALT_LABEL,
  },
  labelDisabled: {
    color: colors.BUTTON_DISABLED_LABEL,
  },
});
