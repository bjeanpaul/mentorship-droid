import * as constants from 'src/constants/profile';
import { staticStatus } from 'src/helpers';


const profileStatusIdle = staticStatus(constants.PROFILE_STATUS_IDLE);
const profileStatusBusy = staticStatus(constants.PROFILE_STATUS_BUSY);
const profileStatusError = staticStatus(constants.PROFILE_STATUS_ERROR);


export {
  profileStatusIdle,
  profileStatusBusy,
  profileStatusError,
};
