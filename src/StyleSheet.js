import {
  StyleSheet,
} from 'react-native';


export const fontSize = {
  xSmall: 12,
  small: 14,
  medium: 16,
  large: 18,
  xLarge: 20,
  xxLarge: 32,
};

export const fontWeight = {
  medium: '300',
  bold: '500',
};

const styles = StyleSheet.create({

  text: {
    fontFamily: 'Brandon Text',
    fontSize: fontSize.medium,
    textAlign: 'center',
  },
  textLink: {
    fontFamily: 'Brandon Text',
    fontSize: fontSize.small,
    textAlign: 'center',
    color: 'rgba(246, 111, 63, 0.97)',
  },

  heading: {
    fontFamily: 'Brandon Text',
    fontSize: fontSize.xLarge,
    fontWeight: fontWeight.medium,
    textAlign: 'center',
    color: '#003035',
  },

  defaultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textInput: {
    fontFamily: 'BrandonText',
    fontSize: fontSize.large,
    color: '#003035',
    padding: 0,
    paddingBottom: 8,
    height: 28,
  },


  fontSmall: {
    fontFamily: 'brandon',
    fontSize: fontSize.small,
    color: '#9fb1b3',
  },
});

export default styles;
