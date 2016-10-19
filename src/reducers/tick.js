import moment from 'moment';
import { TICK } from 'src/constants/tick';


const createInitialState = () => ({
  time: +moment(),
});


const tick = (state = createInitialState(), action) => {
  switch (action.type) {
    case TICK:
      return {
        ...state,
        time: +moment(),
      };

    default:
      return state;
  }
};


export { createInitialState };
export default tick;
