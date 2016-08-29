import * as constants from 'src/constants/profile';
import { staticStatus } from 'src/helpers';


export const profileStatusIdle = staticStatus(constants.PROFILE_STATUS_IDLE);
export const profileStatusBusy = staticStatus(constants.PROFILE_STATUS_BUSY);
export const profileStatusError = staticStatus(constants.PROFILE_STATUS_ERROR);


export {
  profileStatusIdle,
  profileStatusBusy,
  profileStatusError,
};
