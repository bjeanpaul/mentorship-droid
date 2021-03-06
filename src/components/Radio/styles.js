import { mergeAll } from 'lodash/fp';
import { StyleSheet } from 'react-native';

import colors from 'src/constants/colors';
import { DEVICE_WIDTH, DEVICE_WIDTH_MEDIUM } from 'src/constants/styles';


export default StyleSheet.create(mergeAll([{
  container: {
    flex: 1,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 16,
  },
  item: {
    paddingTop: 18,
    paddingBottom: 18,
    borderBottomWidth: 1,
    borderColor: colors.RADIO_LIST_BORDER,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemLabel: {
    textAlign: 'left',
    flex: 1,
    color: colors.RADIO_LIST_TEXT,
    fontSize: 14,
    marginRight: 16,
  },
  itemImage: {
    height: 32,
    width: 32,
  },
}, DEVICE_WIDTH > DEVICE_WIDTH_MEDIUM && {
  itemLabel: {
    fontSize: 18,
  },
}]));
