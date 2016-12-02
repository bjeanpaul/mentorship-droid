import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';


export default StyleSheet.create({
  messageContent: {
    fontSize: 16,
    paddingTop: 14,
    paddingBottom: 18,
    paddingHorizontal: 24,
    borderRadius: 6,
    backgroundColor: colors.BG_DEFAULT,
  },
  messageContentSent: {
    color: colors.TEXT_LIGHT,
    backgroundColor: colors.MESSAGE_RECEIVED_BG,
  },
});
