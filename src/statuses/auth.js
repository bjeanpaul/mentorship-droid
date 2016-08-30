import * as constants from 'src/constants/auth';
import { staticStatus } from 'src/helpers';


export const authStatusIdle = staticStatus(constants.AUTH_STATUS_IDLE);
export const authStatusBusy = staticStatus(constants.AUTH_STATUS_BUSY);
export const authStatusError = staticStatus(constants.AUTH_STATUS_ERROR);
export const authStatusNotFound = staticStatus(constants.AUTH_STATUS_NOT_FOUND);


export {
  authStatusIdle,
  authStatusBusy,
  authStatusError,
  authStatusNotFound,
};
