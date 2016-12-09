import { StyleSheet } from 'react-native';
import { FONT, FONT_WEIGHT } from 'src/constants/styles';


export default StyleSheet.create({
  messages: {
    flex: 1,
    padding: 16,
  },
  message: {
    alignItems: 'flex-end',
    marginVertical: 24,
  },
  messageInbound: {
    alignItems: 'flex-start',
  },
  groupDate: {
    fontSize: 16,
    fontFamily: FONT.MEDIUM,
    fontWeight: FONT_WEIGHT.MEDIUM,
    marginBottom: 3,
    marginTop: 7,
  },
});
