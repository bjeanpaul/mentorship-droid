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
    padding: 15,
    backgroundColor: colors.ONBOARDING_LANDING_GET_STARTED_TEXT,
  },
  getStartedHeading: {
    fontSize: 20,
    marginBottom: 15,
  },
  login: {
    padding: 15,
    backgroundColor: colors.ONBOARDING_LANDING_LOGIN_BG,
    justifyContent: 'center',
  },
});
