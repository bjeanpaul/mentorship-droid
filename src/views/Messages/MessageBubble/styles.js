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
  container: {
    flex: 1,
    alignItems: 'flex-end',
  },
  bubble: {
    marginHorizontal: 12,
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    textAlign: 'left',
  },
  time: {
    fontSize: 14,
    color: colors.MESSAGE_BUBBLE_TIME_TEXT,
  },
});
