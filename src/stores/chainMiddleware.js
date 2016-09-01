import { has, mapValues } from 'lodash';
import { castThunk } from 'src/actionHelpers';


const chainMiddleware = rawMappings => {
  let isChaining = false;
  const mappings = mapValues(rawMappings, castThunk);

  return () => next => async action => {
    if (has(mappings, action.type) && !isChaining) {
      isChaining = true;

      const res = await next(action);
      await next(mappings[action.type]());

      isChaining = false;
      return res;
    } else {
      return next(action);
    }
  };
};


export default chainMiddleware;
