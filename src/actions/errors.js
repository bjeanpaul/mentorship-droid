import * as constants from 'src/constants/errors';
import { staticAction } from 'src/actionHelpers';
import { ApiResponseError, NetworkError } from 'src/api';


export default [
  [ApiResponseError, staticAction(constants.API_ERROR)],
  [NetworkError, staticAction(constants.NETWORK_ERROR)],
];
