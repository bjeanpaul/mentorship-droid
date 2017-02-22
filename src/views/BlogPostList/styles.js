import { StyleSheet } from 'react-native';

import colors from 'src/constants/colors';
import { FONT, FONT_WEIGHT } from 'src/constants/styles';


export default StyleSheet.create({
  blogPostList: {
    flex: 1,
    backgroundColor: colors.BG_DEFAULT_SECONDARY,
  },
  blogPost: {
    paddingVertical: 18,
    paddingHorizontal: 10,
    marginBottom: 8,
    flexDirection: 'row',
    backgroundColor: colors.BG_DEFAULT,
  },
  blogPostDetail: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingRight: 18,
  },
  blogPostCreatedAt: {
    fontSize: 11,
    color: colors.TEXT_SECONDARY,
    fontFamily: FONT.MEDIUM,
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
  blogPostTitle: {
    paddingLeft: 6,
  },
  blogPostThumbnail: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingRight: 6,
  },
  blogPostThumbnailImage: {
    width: 96,
    height: 96,
    paddingRight: 6,
  },
});
