import * as constants from 'src/constants/navigation';


export const navigateBack = () => ({
  type: constants.NAVIGATE_BACK,
});


export const navigateForward = () => ({
  type: constants.NAVIGATE_FORWARD,
});
