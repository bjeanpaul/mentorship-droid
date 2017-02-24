import { StyleSheet } from 'react-native';

import colors from 'src/constants/colors';
import { DEVICE_WIDTH } from 'src/constants/styles';
import { FONT, FONT_WEIGHT } from 'src/constants/styles';


const IMAGE_WIDTH = 360;
const IMAGE_HEIGHT = 203;


export default StyleSheet.create({
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    maxWidth: DEVICE_WIDTH,
    resizeMode: 'contain',
  },
  imageContainer: {
    alignItems: 'center',
  },
  createdAt: {
    fontSize: 11,
    textAlign: 'center',
    color: colors.TEXT_SECONDARY,
    fontFamily: FONT.MEDIUM,
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
});
