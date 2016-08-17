const contextMiddleware = fn => (dispatch, getState) => next => action => (
  typeof action === 'function'
    ? action(dispatch, fn(getState()), getState)
    : next(action));


export default contextMiddleware;
