import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  image: {
    flex: 0.6,
    overflow: 'hidden',
    alignItems: 'center',
  },
  getStarted: {
    flex: .5,
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
