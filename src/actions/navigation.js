import * as constants from 'src/constants/navigation';


export const navigateBack = () => ({
  type: constants.NAVIGATE_BACK_REQUEST,
});


export const navigateForward = () => ({
  type: constants.NAVIGATE_FORWARD_REQUEST,
});
