import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH } from 'src/constants/styles';


const IMAGE_WIDTH = 300;
const IMAGE_HEIGHT = 160;


export default StyleSheet.create({
  imageContainer: {
    paddingHorizontal: 30,
    paddingTop: 24,
    paddingBottom: 19,
    alignItems: 'center',
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    maxWidth: DEVICE_WIDTH - 60,
  },
});
