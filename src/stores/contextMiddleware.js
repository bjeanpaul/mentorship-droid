import { isFunction } from 'lodash';


const contextMiddleware = fn => () => next => action => (
  isFunction(action)
    ? next((dispatch, getState) => action(dispatch, fn(getState()), getState))
    : next(action));


export default contextMiddleware;
