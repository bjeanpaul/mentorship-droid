import { StyleSheet } from 'react-native';
import { FONT } from 'src/constants/styles';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  text: {
    color: colors.DEFAULT_TEXT,
    fontFamily: FONT.REGULAR,
    fontSize: 13,
    textAlign: 'center',
  },
});
