import * as constants from 'src/constants/errors';
import { staticAction } from 'src/actionHelpers';


export const networkError = staticAction(constants.NETWORK_ERROR);
export const apiResponseError = staticAction(constants.API_RESPONSE_ERROR);
