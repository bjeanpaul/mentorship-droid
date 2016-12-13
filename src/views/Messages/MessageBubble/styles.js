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
      color: colors.TEXT_LIGHT,
    },
  }),
};


export default StyleSheet.create({
  bubble: {
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    textAlign: 'left',
  },
});
