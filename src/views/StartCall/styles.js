import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  body: {
    flex: 1,
  },
  imageContainer: {
    flex: 0.75,
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 29,
  },
  image: {
    flex: -1,
    resizeMode: 'contain',
  },
  contentContainer: {
    flex: 0.25,
    paddingLeft: 24,
    paddingRight: 24,
  },
  content: {
    fontSize: 20,
  },
  footer: {
    padding: 24,
    justifyContent: 'center',
  },
});
