import { StyleSheet } from 'react-native';
import { FONT, FONT_WEIGHT } from 'src/constants/styles';

export default StyleSheet.create({
  header: {
    alignItems: 'flex-start',
  },
  nextCallLabel: {
    fontSize: 12,
    fontFamily: FONT.BOLD,
    fontWeight: FONT_WEIGHT.BOLD,
    color: '#9fb1b3',
  },
  date: {
    fontSize: 18,
  },
  hasDate: {
    color: '#003035',
  }
});
