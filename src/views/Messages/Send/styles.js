import { StyleSheet } from 'react-native';
import { FONT } from 'src/constants/styles';
import colors from 'src/constants/colors';


export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16,
    borderTopColor: colors.SEND_BORDER,
    borderTopWidth: 1,
  },
  bubble: {
    // there seems to be some vertical padding on TextInput that can't be removed
    paddingTop: 10,
    paddingBottom: 12,
  },
  input: {
    borderBottomWidth: 0,
    fontFamily: FONT.REGULAR,
    fontSize: 16,
    color: colors.TEXT_INPUT_TEXT,
    padding: 0,
  },
  send: {
    marginLeft: 12,
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: colors.BUTTON_BG,
  },
  sendImage: {
    padding: 8,
  },
});
