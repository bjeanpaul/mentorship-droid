import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';


export const bubbleThemes = {
  dark: StyleSheet.create({
    bubble: {
      backgroundColor: colors.MESSAGE_SENT_BG,
    },
    bubbleContent: {
      color: colors.TEXT_LIGHT,
    },
  }),
};


export default StyleSheet.create({
  messages: {
    flex: 1,
    paddingHorizontal: 16,
  },
  message: {
    marginVertical: 24,
  },
});
