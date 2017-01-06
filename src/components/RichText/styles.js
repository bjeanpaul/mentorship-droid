import { omit } from 'lodash';
import mdStyles from 'react-native-simple-markdown/styles';

import { FONT, FONT_WEIGHT } from 'src/constants/styles';
import { DEVICE_WIDTH } from 'src/constants/styles';
import colors from 'src/constants/colors';
import Text from 'src/components/Text';


const FONT_SIZE_NORMAL = 18;


export default {
  container: {
    paddingHorizontal: 16,
  },
  mentorshipImageContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  mentorshipImage: {
    width: 328,
    height: 183,
    maxWidth: DEVICE_WIDTH - 20,
  },
  del: {
    textDecorationLine: 'line-through',
  },
  blockQuoteSection: {
    ...mdStyles.blockQuoteSection,
    marginBottom: 20,
  },
  blockQuoteSectionBar: {
    ...mdStyles.blockQuoteSectionBar,
    backgroundColor: colors.BG_DARK,
  },
  text: Text.styles.default,
  paragraph: [Text.types.paragraph, {
    fontSize: FONT_SIZE_NORMAL,
  }],
  u: {
  },
  list: {
    marginBottom: 20,
  },
  listItemText: {
    ...omit(mdStyles.listItemText, 'color'),
    flex: 1,
    fontSize: FONT_SIZE_NORMAL,
  },
  listItemNumber: {
    fontSize: FONT_SIZE_NORMAL,
    color: colors.TEXT_DEFAULT,
  },
  listItemBullet: {
    fontSize: FONT_SIZE_NORMAL,
    color: colors.TEXT_DEFAULT,
  },
  heading: {
    fontFamily: FONT.BOLD,
    fontWeight: FONT_WEIGHT.BOLD,
  },
  heading1: {
    fontSize: 24,
    fontFamily: FONT.MEDIUM,
    fontWeight: FONT_WEIGHT.MEDIUM,
    textAlign: 'center',
    marginTop: 11,
    marginBottom: 25,
  },
  heading2: {
    fontSize: 18,
    marginTop: 27,
    marginBottom: 13,
  },
  heading3: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  heading4: {
    fontSize: 15,
    marginTop: 14,
    marginBottom: 7,
  },
  heading5: {
    fontSize: 14,
    marginTop: 8,
    marginBottom: 4,
  },
  heading6: {
    fontSize: 13,
    marginTop: 6,
    marginBottom: 3,
  },
  table: {
  },
  tableHeader: {
  },
  tableRow: {
  },
};
