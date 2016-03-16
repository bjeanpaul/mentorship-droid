
// TODO monitor responses and invalidate the authToken if the user is
// no longer authenticated.
const callAPIMiddleware = function callAPIMiddleware({ dispatch, getState }) {
  return next => action => {
    const {
      // The types of actions to emit before and after.
      types,
      // passed to fetch, to perform the fetching.
      request,
      // argument to inject in begin/ end actions.
      payload = {},
      onFulfilled,
      onRejected,
    } = action;

    if (!types) {
      // Normal action, pass it on.
      return next(action);
    }

    if (
      !Array.isArray(types) ||
      types.length !== 3 ||
      !types.every(type => typeof type === 'string')) {
      throw new Error('Expected an array of three string types.');
    }

    const [requestType, successType, failureType] = types;

    dispatch(Object.assign({}, payload, {
      type: requestType,
    }));

    const authToken = getState().user.auth.authToken;
    request.headers.append('Authorization', `Basic ${authToken}`);
    request.headers.append('Accept', 'application/json');
    request.headers.append('Content-Type', 'application/json');

    return fetch(request)
    .then(response => response.json().then(json => ({ json, response })))
    .then(({ json, response }) => {
      if (response.ok !== true) {
        return Promise.reject({ json, response });
      }

      dispatch(Object.assign({}, payload, {
        type: successType,
        json,
      }));

      return { json, response };
    })
    // TODO: This can catch errors that have nothing to do with the middleware.
    .then(onFulfilled, onRejected)
    .catch((error) => {
      let errorMessage;
      if (error instanceof TypeError) {
        errorMessage = error.message;
      } else {
        errorMessage = error.json.detail || 'Something bad happened';
      }
      dispatch(Object.assign({}, payload, {
        type: failureType,
        errorMessage,
      }));
    });
    // end of fetch.
  };
};

export default callAPIMiddleware;
