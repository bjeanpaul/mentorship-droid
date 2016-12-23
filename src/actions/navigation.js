import { staticAction } from 'src/actionHelpers';
import * as constants from 'src/constants/navigation';
import BackAndroid from 'BackAndroid';

import * as routes from 'src/constants/routes';
import { getActiveTopRoute } from 'src/store/helpers';


export const dismissScreen = staticAction(constants.SCREEN_DISMISS);


export const changeNavTab = tab => ({
  type: constants.NAV_TAB_CHANGE,
  payload: { tab },
});


export const dismissNative = () => (dispatch, ctx, getState) => {
  const state = getState();
  const activeRoute = getActiveTopRoute(state);

  switch (activeRoute.key) {
    case routes.ROUTE_LANDING:
    case routes.ROUTE_NAVIGATOR:
      return BackAndroid.exitApp();

    default:
      return dispatch(dismissScreen());
  }
};
