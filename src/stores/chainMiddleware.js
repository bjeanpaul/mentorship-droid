import { has, mapValues } from 'lodash';
import { castThunk } from 'src/actionHelpers';


const chainMiddleware = rawMappings => {
  const mappings = mapValues(rawMappings, castThunk);
  let isChaining = false;

  return () => next => async action => {
    if (!has(mappings, action.type)) {
      await next(action);
    } else if (!isChaining) {
      isChaining = true;
      await next(action);
      await next(mappings[action.type]());
      isChaining = false;
    }
  };
};


export default chainMiddleware;
