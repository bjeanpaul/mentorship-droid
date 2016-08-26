import { StyleSheet } from 'react-native';

import colors from 'src/constants/colors';


export default StyleSheet.create({
  default: {
    paddingLeft: 16,
    paddingRight: 16,
    height: 72,
    justifyContent: 'center',
  },
});


export const themes = StyleSheet.create({
  dark: {
    backgroundColor: colors.BG_DARK,
  },
});
