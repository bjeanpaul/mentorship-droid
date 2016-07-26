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
        requestOpts = {},
        normalizeJSON,
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

      dispatch({ type: requestType });

      const req = new Request(url, requestOpts);
      req.headers.set('Accept', 'application/json');
      req.headers.set('Content-Type', 'application/json; charset=utf-8');

      /* some requests don't expect an authorization header at all, so we
      need to be able to turn it off. */
      if (!requestOpts.disableAuthorizationHeader) {
        req.headers.append('Authorization',
          `Basic ${this.getAuthorizationHeaderValue(getState())}`);
      }


      return fetch(req)
        .then((response) => {
          let n = ({ json: {}, response });
          /* I have noted that sometimes I receive and empty response body,
          with the incorrect content type.

          TODO: Can I check the length instead?
          */
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.indexOf('application/json') !== -1) {
            n = response.json().then(json => ({ json, response }));
          }
          return n;
        })
        .then(({ json, response }) => {
          if (response.ok !== true) {
            return Promise.reject({ json, response });
          }
          return { json, response };
        })
        .then(normalizeJSON)
        .then(({ json, response }) => {

          dispatch({
            type: successType,
            payload: json,
          });

          return { json, response };
        })
        .then(onSuccess, onFailure)
        .catch((error) => {
          console.log('----- network request failure ----');
          console.log(error);

          let errorMessage;
          if (error instanceof TypeError) {
            errorMessage = error.message;
          } else {
            if (error.json && error.json.detail) {
              errorMessage = error.json.detail
            } else {
              errorMessage = 'Something bad happened';
            }
          }

          dispatch({
            type: failureType,
            errorMessage,
          });
        });
        // end of fetch.
    };
  }
}
