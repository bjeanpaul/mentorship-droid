import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  body: {
    flex: 1,
  },
  imageContainer: {
    flex: 3,
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 29,
  },
  image: {
    flex: -1,
    width: 328,
    height: 288,
    resizeMode: 'contain',
  },
  contentContainer: {
    flex: 1,
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
