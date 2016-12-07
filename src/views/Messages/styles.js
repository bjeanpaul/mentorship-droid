import { StyleSheet } from 'react-native';
import { FONT } from 'src/constants/styles';
import colors from 'src/constants/colors';


export default StyleSheet.create({
  messages: {
    flex: 1,
    paddingHorizontal: 16,
  },
  message: {
    marginVertical: 24,
  },
  bubble: {
    flex: 1,
    paddingTop: 14,
    paddingBottom: 17,
    paddingHorizontal: 24,
    borderRadius: 6,
    backgroundColor: colors.BG_DEFAULT,
  },
  bubbleOutbound: {
    backgroundColor: colors.MESSAGE_SENT_BG,
  },
  messageContent: {
    fontSize: 16,
    textAlign: 'left',
  },
  messageContentOutbound: {
    color: colors.TEXT_LIGHT,
  },
  send: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16,
    borderTopColor: colors.SEND_BORDER,
    borderTopWidth: 1,
  },
  bubbleSend: {
    // there seems to be some vertical padding on TextInput that can't be removed
    paddingTop: 10,
    paddingBottom: 12,
  },
  sendInputText: {
    borderBottomWidth: 0,
    fontFamily: FONT.REGULAR,
    fontSize: 16,
    color: colors.TEXT_INPUT_TEXT,
    padding: 0,
  },
  sendButton: {
    marginLeft: 12,
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: colors.BUTTON_BG,
  },
  sendButtonImage: {
    padding: 8,
  },
});
