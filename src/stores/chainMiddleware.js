import { constant, has } from 'lodash';
import { sequence } from 'src/actionHelpers';


const chainMiddleware = mappings => {
  let isChaining = false;

  return () => next => async action => {
    if (has(mappings, action.type) && !isChaining) {
      isChaining = true;

      const res = await next(sequence([
        constant(action),
        mappings[action.type],
      ])());

      isChaining = false;
      return res;
    } else {
      return next(action);
    }
  };
};


export default chainMiddleware;
