import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  imageContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  bottom: {
    justifyContent: 'flex-end',
  },
  getStarted: {
    paddingHorizontal: 15,
    paddingTop: 8,
    paddingBottom: 14,
    backgroundColor: colors.ONBOARDING_LANDING_GET_STARTED_TEXT,
  },
  getStartedHeading: {
    paddingBottom: 8,
    fontSize: 20,
  },
  login: {
    paddingHorizontal: 15,
    paddingBottom: 8,
    backgroundColor: colors.ONBOARDING_LANDING_LOGIN_BG,
    justifyContent: 'center',
  },
});
