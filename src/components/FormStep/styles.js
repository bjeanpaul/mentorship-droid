import { merge } from 'lodash';
import { StyleSheet } from 'react-native';

import { DEVICE_HEIGHT, DEVICE_HEIGHT_SMALL } from 'src/constants/styles';


export default StyleSheet.create(merge({
  title: {
    margin: 25,
  },
  paginationContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
}, DEVICE_HEIGHT > DEVICE_HEIGHT_SMALL && {
  title: {
    marginBottom: 50,
  },
}));
