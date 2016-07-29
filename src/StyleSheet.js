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
  bold: '500',
};

const styles = StyleSheet.create({

  text: {
    lineHeight: 24,
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

  header: {
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginLeft: 24,
    marginRight: 24,
    padding: 0,
    paddingBottom: 8,
    height: 28,
  },
});

export default styles;
