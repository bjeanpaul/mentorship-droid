import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH } from 'src/constants/styles';


const IMAGE_WIDTH = 340;
const IMAGE_HEIGHT = 160;
const PADDING = 10;


export default StyleSheet.create({
  imageContainer: {
    paddingTop: 24,
    paddingBottom: 19,
    alignItems: 'center',
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    maxWidth: DEVICE_WIDTH - (PADDING * 2),
  },
});
