import { StyleSheet } from 'react-native';

import { FONT, FONT_WEIGHT } from 'src/constants/styles';
import colors from 'src/constants/colors';


export default StyleSheet.create({
  categoryTitle: {
    marginLeft: 48,
    marginRight: 48,
  },
  posterContainer: {
    alignItems: 'center',
  },
  poster: {
    width: 360,
    height: 248,
    paddingTop: 1,
    paddingBottom: 1,
  },
  title: {
    fontSize: 32,
    fontFamily: FONT.MEDIUM,
    fontWeight: FONT_WEIGHT.MEDIUM,
    marginLeft: 24,
    marginRight: 24,
    paddingTop: 9,
    paddingBottom: 9,
  },
  about: {
    paddingTop: 10,
    paddingBottom: 24,
  },
  shortcuts: {
    paddingTop: 23,
    paddingBottom: 24,
  },
  status: {
    color: colors.ACTIVITY_STATUS,
    fontSize: 14,
    marginLeft: 24,
    marginRight: 24,
  },
  statusAbout: {
    paddingBottom: 27,
  },
  statusShortcuts: {
    paddingBottom: 19,
  },
  actionContainer: {
    marginLeft: 24,
    marginRight: 24,
    paddingTop: 15,
    paddingBottom: 17,
    borderColor: colors.TEXT_LIGHT,
    borderWidth: 2,
    borderRadius: 4,
  },
  actionContainerShortcuts: {
    marginTop: 0,
  },
  actionText: {
    fontSize: 13,
    letterSpacing: 1,
    color: colors.TEXT_LIGHT,
    fontFamily: FONT.BOLD,
    fontWeight: FONT_WEIGHT.BOLD,
  },
  section: {
    marginBottom: 29,
  },
  sectionHeader: {
    paddingLeft: 24,
    paddingRight: 24,
    height: 72,
    backgroundColor: colors.ACTIVITY_SECTION_HEADER_BG,
    borderColor: colors.ACTIVITY_SECTION_HEADER_BORDER,
    justifyContent: 'center',
    marginBottom: 12,
  },
  sectionIcon: {
    width: 40,
    height: 40,
    top: 16,
    position: 'absolute',
    resizeMode: 'contain',
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: FONT.BOLD,
    fontWeight: FONT_WEIGHT.BOLD,
    color: colors.ACTIVITY_SECTION_HEADER_TITLE,
  },
  sectionBody: {
    paddingLeft: 24,
    paddingRight: 24,
  },
});
