import { merge } from 'lodash';
import { StyleSheet } from 'react-native';
import { FONT, FONT_WEIGHT } from 'src/constants/styles';
import colors from 'src/constants/colors';

import { DEVICE_HEIGHT, DEVICE_HEIGHT_MEDIUM } from 'src/constants/styles';


export default StyleSheet.create(merge({
  header: {
    margin: 18,
  },
  title: {
    margin: 7,
  },
  secondaryTitle: {
    fontSize: 14,
    fontFamily: FONT.REGULAR,
    fontWeight: FONT_WEIGHT.REGULAR,
    color: colors.TEXT_SECONDARY,
  },
  paginationContainer: {
    justifyContent: 'flex-end',
  },
  contentContainer: {
    flex: 1,
  },
}, DEVICE_HEIGHT > DEVICE_HEIGHT_MEDIUM && {
  header: {
    margin: 25,
  },
  title: {
    margin: 13,
  },
}));
