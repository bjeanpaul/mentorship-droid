
export default class RemoteOperationMiddleware {
  constructor({ getAuthToken }) {
    if (!typeof getAuthToken === 'string') {
      throw new Error('`getAuthToken` is required, and should be a function.');
    }
    this.getAuthToken = getAuthToken;
    this.apply = this.apply.bind(this);
  }

  apply({ dispatch, getState }) {
    return next => action => {
      const {
        types,
        request,
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

      const req = new Request(`http://192.168.178.20:8000/mentor/${request.endpoint}`, request);
      req.headers.append('Accept', 'application/json');
      req.headers.append('Content-Type', 'application/json');
      req.headers.append('Authorization', `Basic ${this.getAuthToken(getState)}`);

      return fetch(req)
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
      //.then(onFulfilled, onRejected)
      .catch((error) => {
        let errorMessage;
        if (error instanceof TypeError) {
          errorMessage = error.message;
        } else {
          errorMessage = error.json.detail || 'Something bad happened';
        }
        console.log('///////////////////', errorMessage)
        dispatch(Object.assign({}, payload, {
          type: failureType,
          errorMessage,
        }));
      });
      // end of fetch.
    };
  }
}
