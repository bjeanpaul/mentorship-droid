import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 19,
  },
  imageLabel: {
    color: colors.PROFILE_PICTURE_CHOOSE_PHOTO_TEXT,
    fontSize: 18,
  },
});
