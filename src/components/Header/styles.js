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
});


export const themes = {
  dark: StyleSheet.create({
    header: {
      backgroundColor: colors.BG_DARK,
    },
  }),
};
