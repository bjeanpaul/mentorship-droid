import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.EVENT_BG,
    marginTop: 12,
    margin: 24,
    padding: 20,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 4,
  },
  imageContainer: {
    alignSelf: 'center',
    backgroundColor: colors.EVENT_MILESTONE_IMAGE_BG,
    width: 112,
    height: 112,
    borderRadius: 66,
    overflow: 'hidden',
    marginBottom: 20,
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
