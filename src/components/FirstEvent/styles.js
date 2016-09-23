import { StyleSheet } from 'react-native';
import { FONT, FONT_WEIGHT } from 'src/constants/styles';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.EVENT_BG,
    marginTop: 12,
    margin: 24,
    padding: 20,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 4,
  },
  greeting: {
    textAlign: 'left',
    fontFamily: FONT.BOLD,
    fontWeight: FONT_WEIGHT.BOLD,
    fontSize: 20,
    marginBottom: 16,
  },
  blurb: {
    marginBottom: 24,
    fontSize: 18,
    textAlign: 'left',
  },
});
