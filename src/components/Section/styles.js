import { StyleSheet } from 'react-native';

import colors from 'src/constants/colors';


export default StyleSheet.create({
  section: {
    padding: 24,
  },
  header: {
    paddingBottom: 11,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.SECTION_DIVIDER,
  },
});
