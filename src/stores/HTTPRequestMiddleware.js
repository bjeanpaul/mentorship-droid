export default class HTTPRequestMiddleware {

  constructor({ getAuthorizationHeaderValue }) {
    this.getAuthorizationHeaderValue = getAuthorizationHeaderValue;
    this.apply = this.apply.bind(this);
  }

  apply({ dispatch, getState }) {
    return next => action => {
      const {
        types,
        url,
        requestOpts,
        payload = {}, // passed along with actions
        onSuccess,
        onFailure,
      } = action;

      if (!url) {
        return next(action);
      }

      if (
        !Array.isArray(types) ||
        types.length !== 3 ||
        !types.every(type => typeof type === 'string')
      ) {
        throw new Error('Expected an array of three string types.');
      }

      const [requestType, successType, failureType] = types;

      dispatch(Object.assign({}, payload, {
        type: requestType,
      }));

      const req = new Request(url, requestOpts);
      req.headers.append('Accept', 'application/json');
      req.headers.append('Content-Type', 'application/json');
      req.headers.append('Authorization', `Basic ${this.getAuthorizationHeaderValue(getState())}`);

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
        .then(onSuccess, onFailure)
        .catch((error) => {
          //console.log('----- network request failure ----', error)
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
  }
}
