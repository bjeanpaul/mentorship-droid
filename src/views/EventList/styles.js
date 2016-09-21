import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';


export default StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBackground: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  groupLabel: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.EVENT_GROUP_LABEL_BORDER,
    backgroundColor: colors.EVENT_GROUP_LABEL_BG,
    alignSelf: 'center',
    borderRadius: 12.5,
    padding: 10,
    paddingTop: 5,
    paddingBottom: 7,
    marginBottom: 24,
  },
  groupLabelText: {
    color: colors.EVENT_GROUP_LABEL_TEXT,
    fontSize: 11,
  },
});
