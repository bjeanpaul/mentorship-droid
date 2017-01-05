import { omit } from 'lodash';
import mdStyles from 'react-native-simple-markdown/styles';

import colors from 'src/constants/colors';
import Text from 'src/components/Text';


const FONT_SIZE_NORMAL = 18;


export default {
  container: {
    paddingHorizontal: 16,
  },
  del: {
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
  listItemText: {
    ...omit(mdStyles.listItemText, 'color'),
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
  table: {
  },
  tableHeader: {
  },
  tableRow: {
  },
};
