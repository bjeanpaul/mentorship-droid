import * as navigate from '../actions';
import * as constants from '../constants';

describe('navigation/onboarding/actions', () => {
  it('pushHelloRoute', () => {
    expect(navigate.pushHelloRoute()).toEqual({
      type: constants.ONBOARDING_NAVIGATION_PUSH,
      payload: {
        key: constants.ONBOARDING_ROUTE_HELLO,
      },
    });
  });

  it('pushProfilePictureRoute', () => {
    expect(navigate.pushProfilePictureRoute()).toEqual({
      type: constants.ONBOARDING_NAVIGATION_PUSH,
      payload: {
        key: constants.ONBOARDING_ROUTE_PROFILE_PICTURE,
      },
    });
  });

  it('pushCameraRollRoute', () => {
    expect(navigate.pushCameraRollRoute()).toEqual({
      type: constants.ONBOARDING_NAVIGATION_PUSH,
      payload: {
        key: constants.ONBOARDING_ROUTE_CAMERA_ROLL,
      },
    });
  });
});
