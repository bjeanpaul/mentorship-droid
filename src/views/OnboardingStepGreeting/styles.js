import { StyleSheet } from 'react-native';

import { FONT, FONT_WEIGHT } from 'src/constants/styles';
import colors from 'src/constants/colors';


export default StyleSheet.create({
  base: {
    justifyContent: 'space-around',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    height: 120,
    width: 120,
  },
  welcome: {
    fontFamily: FONT.MEDIUM,
    fontWeight: FONT_WEIGHT.MEDIUM,
    fontSize: 32,
    color: colors.PROFILE_HELLO_WELCOME_TEXT,
  },
  intro: {
    color: colors.PROFILE_HELLO_INTRO_TEXT,
    fontSize: 18,
    paddingLeft: 24,
    paddingRight: 24,
  },
});
