import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    margin: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 88,
    height: 88,
  },
  imageHighlight: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: 88,
    height: 88,
    borderRadius: 88,
  },
  imageIsSelected: {
    borderWidth: 4,
    borderColor: '#f77040',
    backgroundColor: 'transparent',
  },
  label: {
    fontSize: 18,
    color: '#003035',
  },
});
