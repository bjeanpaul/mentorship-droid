import * as constants from 'src/constants/errors';
import { staticAction } from 'src/actionHelpers';
import { ApiResponseError, NetworkError } from 'src/api';


export default [
  [ApiResponseError, staticAction(constants.NETWORK_ERROR)],
  [NetworkError, staticAction(constants.API_ERROR)],
];
