import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';


export default StyleSheet.create({
  row: {
    paddingBottom: 32,
    paddingTop: 26,
    marginLeft: 24,
    marginRight: 24,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.CALL_NOTE_LIST_ROW_BORDER,
  },
  rowText: {
    textAlign: 'left',
    fontSize: 18,
    color: colors.CALL_NOTE_LIST_TEXT,
  },
});
