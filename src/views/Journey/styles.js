import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH } from 'src/constants/styles';
import colors from 'src/constants/colors';


const MENTOR_IMAGE_WIDTH = 360;
const MENTOR_IMAGE_HEIGHT = 173;


const SCALED_MENTOR_IMAGE_HEIGHT = MENTOR_IMAGE_WIDTH > DEVICE_WIDTH
  ? MENTOR_IMAGE_HEIGHT * (DEVICE_WIDTH / MENTOR_IMAGE_WIDTH)
  : MENTOR_IMAGE_HEIGHT;


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
    width: DEVICE_WIDTH,
    height: SCALED_MENTOR_IMAGE_HEIGHT,
    resizeMode: 'contain',
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
  events: {
    flex: 1,
  },
});
