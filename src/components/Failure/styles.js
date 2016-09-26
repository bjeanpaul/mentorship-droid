import { StyleSheet } from 'react-native';

import colors from 'src/constants/colors';


export default StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: colors.OVERLAY_BG,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  content: {
    fontSize: 20,
    marginBottom: 65,
  },
});
