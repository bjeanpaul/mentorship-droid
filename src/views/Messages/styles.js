import { StyleSheet } from 'react-native';
import { FONT, FONT_WEIGHT } from 'src/constants/styles';


export default StyleSheet.create({
  messages: {
    flex: 1,
    padding: 16,
  },
  message: {
    flexDirection: 'row-reverse',
    marginVertical: 24,
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
});
