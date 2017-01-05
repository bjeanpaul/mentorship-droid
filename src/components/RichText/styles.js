import { omit } from 'lodash';
import mdStyles from 'react-native-simple-markdown/styles';

import colors from 'src/constants/colors';
import Text from 'src/components/Text';


export default {
  container: {
    paddingHorizontal: 16,
  },
  del: {
  },
  listItemNumber: {
    color: colors.TEXT_DEFAULT,
  },
  listItemBullet: {
    color: colors.TEXT_DEFAULT,
  },
  blockQuoteSectionBar: {
    ...mdStyles.blockQuoteSectionBar,
    backgroundColor: colors.BG_DARK,
  },
  text: Text.styles.default,
  u: {
  },
  listItemText: omit(mdStyles.listItemText, 'color'),
  table: {
  },
  tableHeader: {
  },
  tableRow: {
  },
};
