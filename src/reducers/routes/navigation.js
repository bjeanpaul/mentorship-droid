import * as navigation from 'src/constants/navigation';

import {
  popCurrent,
  back,
  forward,
} from 'src/navigationHelpers';


export default (state, action) => {
  switch (action.type) {
    case navigation.NAVIGATE_BACK_REQUEST:
      return back(state);

    case navigation.NAVIGATE_FORWARD_REQUEST:
      return forward(state);

    case navigation.SCREEN_DISMISS:
      return popCurrent(state);

    default:
      return state;
  }
};
