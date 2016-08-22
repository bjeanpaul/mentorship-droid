import * as constants from 'src/profile/constants';
import { staticStatus } from 'src/helpers';


export const profileStatusIdle = staticStatus(constants.PROFILE_STATUS_IDLE);
export const profileStatusBusy = staticStatus(constants.PROFILE_STATUS_BUSY);
export const profileStatusError = staticStatus(constants.PROFILE_STATUS_ERROR);


export {
  profileStatusIdle,
  profileStatusBusy,
  profileStatusError,
};
