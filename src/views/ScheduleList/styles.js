import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';


export default StyleSheet.create({
  callInfoContainer: {
    flex: 0.25,
    padding: 24,
    backgroundColor: colors.SCHEDULE_INFO_CALL_INFO_BG,
    justifyContent: 'center',
  },
  callInfoText: {
    textAlign: 'left',
    color: colors.SCHEDULE_LIST_CALL_INFO_TEXT,
    fontSize: 18,
  },
});
