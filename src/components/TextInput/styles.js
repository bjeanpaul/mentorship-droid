import { StyleSheet } from 'react-native';
import { FONT } from 'src/constants/styles';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  container: {
    borderColor: colors.TEXT_INPUT_BORDER_COLOR,
    borderBottomWidth: 1,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 27,
  },
  containerSelected: {
    borderColor: colors.TEXT_INPUT_BORDER_COLOR,
  },
  textInput: {
    fontFamily: FONT.REGULAR,
    fontSize: 18,
    color: colors.TEXT_INPUT_TEXT,
    padding: 0,
    lineHeight: 28,
    marginBottom: 8,
  },
});
