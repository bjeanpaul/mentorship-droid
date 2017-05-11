import { StyleSheet } from 'react-native';

import colors from 'src/constants/colors';


export default StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 40,
    marginRight: 40,
  },
  row: {
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
    fontSize: 16,
    paddingRight: 16,
  },
  itemImage: {
    height: 32,
    width: 32,
  },
});
