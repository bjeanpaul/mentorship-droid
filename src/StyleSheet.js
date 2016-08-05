import {
  StyleSheet,
} from 'react-native';


export const fontSize = {
  xSmall: 12,
  small: 15,
  medium: 16,
  large: 18,
  xLarge: 20,
  xxLarge: 32,
};

export const fontWeight = {
  medium: '300',
  bold: 'bold',
};


export const font = {
  standard: 'Brandon Text',
  medium: 'Brandon Text_medium',
  bold: 'Brandon Text_bold',
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
    fontFamily: 'Brandon Text_medium',
    fontSize: fontSize.xLarge,
    textAlign: 'center',
    color: '#003035',
  },

  header: {
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },


});

export default styles;
