import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';


export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 32,
    paddingTop: 26,
    marginLeft: 24,
    marginRight: 24,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.CALL_NOTE_LIST_ROW_BORDER,
  },
  callNoteTitle: {
    fontSize: 18,
    color: colors.CALL_NOTE_LIST_TEXT,
  },
  callNoteAction: {
    fontSize: 13,
    color: colors.LINK_TEXT,
  },
});
