import { StyleSheet } from 'react-native';
import { FONT, FONT_WEIGHT } from 'src/constants/styles';
import colors from 'src/constants/colors';


export default StyleSheet.create({
  messages: {
    flex: 1,
    padding: 16,
  },
  messageRow: {
    marginVertical: 24,
  },
  message: {
    flexDirection: 'row-reverse',
  },
  groupDate: {
    fontSize: 16,
    fontFamily: FONT.MEDIUM,
    fontWeight: FONT_WEIGHT.MEDIUM,
    marginBottom: 3,
    marginTop: 7,
  },
  messageInbound: {
    flexDirection: 'row',
  },
  messageBubbleContainerInbound: {
    alignItems: 'flex-start',
  },
  retry: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 3,
    backgroundColor: colors.BG_DEFAULT,
  },
  retryContent: {
    fontSize: 11,
    color: colors.LABEL_TEXT,
    fontFamily: FONT.BOLD,
    fontWeight: FONT_WEIGHT.BOLD,
  },
  row: {
    // TODO
  },
});
