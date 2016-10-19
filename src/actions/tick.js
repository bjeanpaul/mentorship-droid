import * as constants from 'src/constants/tick';


const tick = () => dispatch => setInterval(() => dispatch({
  type: constants.TICK,
}), constants.TICK_INTERVAL);


export default tick;
