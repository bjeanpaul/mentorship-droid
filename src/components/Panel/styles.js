import { StyleSheet } from 'react-native';

import { FONT, FONT_WEIGHT } from 'src/constants/styles';
import colors from 'src/constants/colors';


export default StyleSheet.create({
  panel: {
    marginBottom: 29,
  },
  panelHeader: {
    paddingLeft: 24,
    paddingRight: 24,
    height: 72,
    backgroundColor: colors.PANEL_HEADER_BG,
    borderColor: colors.PANEL_BORDER,
    justifyContent: 'center',
    marginBottom: 12,
  },
  panelIcon: {
    width: 40,
    height: 40,
    top: 16,
    position: 'absolute',
    resizeMode: 'contain',
  },
  panelTitle: {
    fontSize: 12,
    fontFamily: FONT.BOLD,
    fontWeight: FONT_WEIGHT.BOLD,
    color: colors.PANEL_HEADER_TITLE,
  },
  panelBody: {
    paddingLeft: 24,
    paddingRight: 24,
  },
});


export const types = {
  embedded: StyleSheet.create({
    panel: {
      flex: 1,
      margin: 24,
      borderColor: colors.PANEL_BORDER,
      borderWidth: 1,
    },
  }),
};
