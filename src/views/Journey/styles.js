import { StyleSheet } from 'react-native';
import { FONT, FONT_WEIGHT } from 'src/constants/styles';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  header: {
    alignItems: 'flex-start',
  },
  nextCall: {
    fontSize: 12,
    fontFamily: FONT.BOLD,
    fontWeight: FONT_WEIGHT.BOLD,
    color: colors.JOURNEY_NEXT_SCHEDULED_CALL_LINK,
  },
  date: {
    fontSize: 18,
  },
  hasDate: {
    color: colors.JOURNEY_NEXT_SCHEDULED_CALL_LINK_HAS_DATE,
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
    backgroundColor: colors.JOURNEY_BG,
  },
  icon: {
    width: 44,
    height: 44,
    marginLeft: 24,
    marginRight: 24,
  },
  eventsContainer: {
    flex: 0.6,
    backgroundColor: colors.JOURNEY_BG,
  },
  eventsBackground: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  eventContainer: {
    backgroundColor: colors.EVENT_BG,
    marginTop: 12,
    margin: 24,
    padding: 20,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 4,
  },
  eventGreetingTitle: {
    textAlign: 'left',
    fontFamily: FONT.BOLD,
    fontWeight: FONT_WEIGHT.BOLD,
    fontSize: 20,
    marginBottom: 16,
  },
  eventGreetingBlurb: {
    marginBottom: 24,
    fontSize: 18,
    textAlign: 'left',
  },
});
