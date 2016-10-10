import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 40,
    marginRight: 40,
  },
  row: {
    paddingTop: 18,
    paddingBottom: 18,
    borderBottomWidth: 1,
    borderColor: '#dfe5e6',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemLabel: {
    color: '#003035',
    fontSize: 18,
  },
  itemImage: {
    height: 32,
    width: 32,
  },
});
