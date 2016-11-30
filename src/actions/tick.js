import * as constants from 'src/constants/tick';
import { tickAction } from 'src/actionHelpers';


const tick = tickAction(constants.TICK_INTERVAL, constants.TICK);


export default tick;
