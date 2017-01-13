import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';
import { FONT, FONT_WEIGHT } from 'src/constants/styles';

export default StyleSheet.create({
  container: {
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingTop: 15,
    paddingBottom: 17,
  },

  title: {
    fontFamily: FONT.BOLD,
    fontWeight: FONT_WEIGHT.BOLD,
    fontSize: 13,
    letterSpacing: 1,
  },
});


export const layouts = StyleSheet.create({
  inline: {
    marginLeft: 0,
    marginRight: 0,
  },

  stretch: {
    alignSelf: 'stretch',
  },
});


export const themes = {
  default: StyleSheet.create({
    container: {
      backgroundColor: colors.BUTTON_BG,
    },

    title: {
      color: colors.BUTTON_TITLE,
    },

    containerIsDisabled: {
      backgroundColor: colors.BUTTON_DISABLED_BG,
    },

    titleIsDisabled: {
      color: colors.BUTTON_DISABLED_TITLE,
    },
  }),


  light: StyleSheet.create({
    container: {
      backgroundColor: colors.BUTTON_LIGHT_BG,
    },

    title: {
      color: colors.BUTTON_LIGHT_TITLE,
    },

    containerIsDisabled: {
      backgroundColor: colors.BUTTON_DISABLED_BG,
    },

    titleIsDisabled: {
      color: colors.BUTTON_DISABLED_TITLE,
    },
  }),


  transparent: StyleSheet.create({
    container: {
      backgroundColor: colors.BUTTON_TRANSPARENT_BG,
      borderColor: colors.BUTTON_TRANSPARENT_BORDER,
      borderWidth: 1,
    },

    title: {
      color: colors.BUTTON_TRANSPARENT_TITLE,
    },

    containerIsDisabled: {
      borderColor: colors.BUTTON_TRANSPARENT_DISABLED_BORDER,
    },

    titleIsDisabled: {
      color: colors.BUTTON_TRANSPARENT_DISABLED_TITLE,
    },
  }),
};


export const sizes = {
  small: StyleSheet.create({
    container: {
      marginHorizontal: 8,
      borderRadius: 2,
      paddingTop: 0,
      paddingBottom: 0,
      paddingHorizontal: 2,
    },
    title: {
      fontSize: 11,
    },
  }),
};
