import { constant, has } from 'lodash';
import { sequence } from 'src/actionHelpers';


const chainMiddleware = mappings => () => next => action => (
  has(mappings, action.type)
    ? next(sequence([constant(action), mappings[action.type]]))
    : next(action));


export default chainMiddleware;
