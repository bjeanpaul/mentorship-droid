import * as constants from 'src/constants/auth';
import { staticStatus } from 'src/helpers';


const authStatusIdle = staticStatus(constants.AUTH_STATUS_IDLE);
const authStatusBusy = staticStatus(constants.AUTH_STATUS_BUSY);
const authStatusError = staticStatus(constants.AUTH_STATUS_ERROR);
const authStatusNotFound = staticStatus(constants.AUTH_STATUS_NOT_FOUND);


export {
  authStatusIdle,
  authStatusBusy,
  authStatusError,
  authStatusNotFound,
};
