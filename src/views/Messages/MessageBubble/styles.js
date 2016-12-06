import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';


export const themes = {
  dark: StyleSheet.create({
    bubble: {
      backgroundColor: colors.MESSAGE_SENT_BG,
    },
    content: {
      color: colors.TEXT_LIGHT,
    },
  }),
};


export default StyleSheet.create({
  content: {
    fontSize: 16,
    textAlign: 'left',
  },
});
