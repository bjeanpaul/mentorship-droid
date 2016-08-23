import React from 'react';
import * as constants from 'src/navigation/onboarding/constants';

import NotFound from 'src/components/NotFound';
import Welcome from './Welcome';
import ProfilePicture from './ProfilePicture';
import CameraRoll from './CameraRoll';

const mapRouteToComponent = (key) => {
  switch (key) {
    case constants.ONBOARDING_ROUTE_HELLO:
      return <Welcome />;
    case constants.ONBOARDING_ROUTE_PROFILE_PICTURE:
      return <ProfilePicture />;
    case constants.ONBOARDING_ROUTE_CAMERA_ROLL:
      return <CameraRoll />;
    default:
      return <NotFound />;
  }
};
export default mapRouteToComponent;
