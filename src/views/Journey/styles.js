import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: 18,
    color: colors.JOURNEY_HEADER_TITLE,
  },
  headerTitleIsDate: {
    color: colors.JOURNEY_HEADER_TITLE_IS_DATE,
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
});
