import { merge } from 'lodash';
import { StyleSheet } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_HEIGHT_SMALL } from 'src/constants/styles';
import colors from 'src/constants/colors';


export default StyleSheet.create(merge({
  imageContainer: {
    flex: 1,
    overflow: 'hidden',
    flexDirection: 'column',
    justifyContent: 'flex-start',
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
    paddingHorizontal: 7,
    paddingTop: 7,
    paddingBottom: 7,
    backgroundColor: colors.ONBOARDING_LANDING_GET_STARTED_TEXT,
  },
  getStartedHeading: {
    paddingBottom: 11,
    fontSize: 20,
  },
  login: {
    paddingTop: 7,
    paddingBottom: 8,
    backgroundColor: colors.ONBOARDING_LANDING_LOGIN_BG,
    justifyContent: 'center',
    alignItems: 'center',
  },
}, DEVICE_HEIGHT > DEVICE_HEIGHT_SMALL && {
  getStarted: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 17,
  },
  getStartedHeading: {
    paddingBottom: 17,
    fontSize: 16,
  },
  login: {
    paddingTop: 15,
    paddingBottom: 17,
  },
}));
