import {
  StyleSheet,
} from 'react-native';


const styles = StyleSheet.create({

  text: {
    fontFamily: 'Brandon Text',
    fontSize: 16,
    textAlign: 'center',
  },
  heading: {
    fontFamily: 'Brandon Text',
    fontSize: 20,
    fontWeight: '500',
    color: '#003035',
    textAlign: 'center',
  },

  defaultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContainer: {
    borderColor: '#dfe5e6',
    borderBottomWidth: 1,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 27,
  },
  textInput: {
    fontFamily: 'brandon',
    padding: 0,
    paddingBottom: 8,
    height: 28,
    color: '#003035',
  },


  fontSmall: {
    fontFamily: 'brandon',
    fontSize: 14,
    color: '#9fb1b3',
  },
  textLink: {
    color: 'rgba(246, 111, 63, 0.97)',
    textAlign: 'center',
  },
});

export default styles;
