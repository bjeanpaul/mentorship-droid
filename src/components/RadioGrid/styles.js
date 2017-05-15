import { mergeAll } from 'lodash/fp';
import { StyleSheet } from 'react-native';

import colors from 'src/constants/colors';
import * as constants from 'src/constants/styles';

const SMALL_CIRCLE_SIZE = 66;
const LARGE_CIRCLE_SIZE = 77;

const ITEM_WIDTH = Math.min(constants.DEVICE_WIDTH, constants.DEVICE_WIDTH_MEDIUM) / 3;
const GRID_WIDTH = (ITEM_WIDTH * 2) + 1;


export default StyleSheet.create(mergeAll([{
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {
    width: GRID_WIDTH,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    width: ITEM_WIDTH,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: SMALL_CIRCLE_SIZE,
    height: SMALL_CIRCLE_SIZE,
    borderRadius: SMALL_CIRCLE_SIZE,
  },
  imageHighlight: {
    backgroundColor: colors.RADIO_GRID_IMAGE_DARKEN,
    width: SMALL_CIRCLE_SIZE,
    height: SMALL_CIRCLE_SIZE,
    borderRadius: SMALL_CIRCLE_SIZE,
  },
  imageIsSelected: {
    borderWidth: 4,
    borderColor: colors.RADIO_GRID_IMAGE_SELECTED_BORDER,
  },
  label: {
    fontSize: 18,
    color: colors.RADIO_GRID_LABEL,
  },
}, constants.DEVICE_HEIGHT > constants.DEVICE_HEIGHT_MEDIUM && {
  item: {
    marginVertical: 20,
  },
  image: {
    width: LARGE_CIRCLE_SIZE,
    height: LARGE_CIRCLE_SIZE,
    borderRadius: LARGE_CIRCLE_SIZE,
  },
  imageHighlight: {
    width: LARGE_CIRCLE_SIZE,
    height: LARGE_CIRCLE_SIZE,
    borderRadius: LARGE_CIRCLE_SIZE,
  },
}]));
