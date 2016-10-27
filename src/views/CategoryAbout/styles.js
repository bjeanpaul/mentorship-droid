import { StyleSheet } from 'react-native';

import colors from 'src/constants/colors';


const IMAGE_WIDTH = 160;
const IMAGE_HEIGHT = 160;


export default StyleSheet.create({
  imageContainer: {
    paddingTop: 24,
    paddingBottom: 19,
    alignItems: 'center',
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
  },
});
