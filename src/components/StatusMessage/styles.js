import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';


export default StyleSheet.create({
  message: {
    fontSize: 13,
    textAlign: 'center',
  },
});

export const themes = {
  default: StyleSheet.create({
    message: {
      color: colors.TEXT_ERROR,
      paddingLeft: 24,
      paddingRight: 24,
      paddingTop: 16,
    },
  }),
  textInputMessage: StyleSheet.create({
    message: {
      color: colors.STATUS_MESSAGE_TEXT_ERROR,
      fontSize: 14,
      textAlign: 'left',
      marginTop: -20,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
    },
  }),
};
