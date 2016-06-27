import {
  StyleSheet,
} from 'react-native';


export const styles = StyleSheet.create({

  defaultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f77040',
    borderWidth: 1,
    borderColor: '#f77040',
    borderRadius: 5,
  },
  buttonText: {
    margin: 16,
    color: '#fff',
    fontSize: 13,
    letterSpacing: 1,
  },
  textInputContainer: {
    borderColor: '#dfe5e6',
    borderBottomWidth: 1,
    marginLeft: 24,
    marginRight: 24,
  },
  textInput: {
    padding: 0,
    paddingBottom: 8,
    height: 28,
    color: '#003035',
  },
});
