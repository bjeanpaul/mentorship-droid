import * as constants from 'src/constants/errors';
import { staticAction } from 'src/actionHelpers';


export const networkError = staticAction(constants.NETWORK_ERROR);
