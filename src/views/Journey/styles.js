import { StyleSheet } from 'react-native';
import { FONT, FONT_WEIGHT } from 'src/constants/styles';

export default StyleSheet.create({
  header: {
    alignItems: 'flex-start',
  },
  nextCall: {
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
  },
  mentee: {
    flex: 0.4,
    width: null,
    height: null,
    resizeMode: 'cover',
    zIndex: 3,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 44,
    height: 44,
    marginLeft: 24,
    marginRight: 24,
  },
  eventsContainer: {
    flex: 0.6,
    backgroundColor: 'pink',
    marginTop: -12,
  },
});
