import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.EVENT_BG,
    margin: 24,
    marginTop: 0,
    padding: 20,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 4,
  },
  imageContainer: {
    alignSelf: 'center',
    backgroundColor: colors.EVENT_MILESTONE_IMAGE_BG,
    marginBottom: 20,
    borderRadius: 66,
  },
  image: {
    width: 112,
    height: 112,
    borderRadius: 66,
  },
  milestonReachedText: {
    fontSize: 16,
    color: colors.EVENT_MILESTONE_REACHED_TEXT,
  },
  categoryNameCompletedText: {
    fontSize: 24,
    color: colors.EVENT_MILESTONE_CATEGORY_NAME_TEXT,
  },
});
