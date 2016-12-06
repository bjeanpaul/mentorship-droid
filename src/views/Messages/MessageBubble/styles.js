import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';


export const themes = {
  dark: StyleSheet.create({
    bubble: {
      backgroundColor: colors.MESSAGE_BUBBLE_BG_DARK,
    },
    content: {
      color: colors.TEXT_LIGHT,
    },
  }),
};


export const states = {
  pending: StyleSheet.create({
    bubble: {
      backgroundColor: colors.MESSAGE_BUBBLE_BG_PENDING,
    },
    content: {
      color: colors.MESSAGE_BUBBLE_TEXT_PENDING,
    },
  }),
};


export default StyleSheet.create({
  content: {
    fontSize: 16,
    textAlign: 'left',
  },
});
