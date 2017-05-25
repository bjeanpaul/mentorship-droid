import { mergeAll } from 'lodash/fp';
import { StyleSheet } from 'react-native';

import colors from 'src/constants/colors';
import {
  FONT, FONT_WEIGHT, DEVICE_WIDTH, DEVICE_WIDTH_MEDIUM,
} from 'src/constants/styles';


export default StyleSheet.create(mergeAll([{
  panel: {
    marginBottom: 16,
  },
  panelHeader: {
    paddingHorizontal: 16,
    paddingTop: 19,
    paddingBottom: 21,
    paddingVertical: 16,
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
    color: colors.PANEL_TEXT,
  },
  panelBody: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  panelBodyContent: {
    fontSize: 16,
    color: colors.PANEL_TEXT,
  },
}, DEVICE_WIDTH > DEVICE_WIDTH_MEDIUM && {
  panel: {
    marginBottom: 21,
  },
  panelBodyContent: {
    fontSize: 18,
  },
}]));


export const types = {
  embedded: StyleSheet.create({
    panel: {
      marginHorizontal: 24,
      borderColor: colors.PANEL_BORDER,
      borderWidth: 1,
    },
  }),
};
