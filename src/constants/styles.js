import { Dimensions } from 'react-native';


// React Native Android doesn't support medium font weights, instead of setting
// the `fontWeight` property you have to specify a different font.
export const FONT = {
  REGULAR: 'Brandon Text',
  MEDIUM: 'Brandon Text_medium',
  BOLD: 'Brandon Text_bold',
};

export const FONT_WEIGHT = {
  NORMAL: 'normal',
  MEDIUM: '400',
  BOLD: 'bold',
};

const dims = Dimensions.get('window');
export const DEVICE_WIDTH = dims.width;
export const DEVICE_HEIGHT = dims.height;
export const DEVICE_HEIGHT_SMALL = 480;
