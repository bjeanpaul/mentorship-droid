export const generateActionTypes = function generateActionNames(
  resource,
  operations = ['FETCH', 'CREATE', 'UPDATE', 'DELETE']
) {
  const actionTypes = {};
  const resourceUC = resource.toUpperCase();

  operations.forEach((operation) => {
    const operationUC = operation.toUpperCase();
    const request = `${resourceUC}_${operationUC}_REQUEST`;
    const success = `${resourceUC}_${operationUC}_SUCCESS`;
    const failure = `${resourceUC}_${operationUC}_FAILURE`;
    actionTypes[request] = request;
    actionTypes[success] = success;
    actionTypes[failure] = failure;
    // We generate duplicate "shortcut" constants that aren't dynamic so
    // that we can reference them in subsequent generators, and reducers.
    const operationLC = operation.toLowerCase();
    actionTypes[`${operationLC}Request`] = request;
    actionTypes[`${operationLC}Success`] = success;
    actionTypes[`${operationLC}Failure`] = failure;
  });
  return actionTypes;
};


export const filterActionTypes = function filterActionTypes(
  actionTypes,
  operation
) {
  const [request, success, failure] = [
    `${operation}Request`,
    `${operation}Success`,
    `${operation}Failure`,
  ];

  if (actionTypes[request] || actionTypes[success] || actionTypes[failure]) {
    return [
      actionTypes[request],
      actionTypes[success],
      actionTypes[failure],
    ];
  }
  return [];
};


// TODO: Delete
export const generateActionCreators = function generateActionCreators(
  url,
  actionTypes,
  requestOpts = {}
) {
  // React-Native doesn't have globals.
  let baseURL = 'http://192.168.178.84:8000/mentor';
  if (global.__TEST__) {
    baseURL = 'http://example.org';
  }
  const actionCreators = {};

  const fetchActionTypes = filterActionTypes(actionTypes, 'fetch');
  if (fetchActionTypes.length === 3) {
    actionCreators.fetch = (onSuccess, onFailure) => ({
      type: '--generated fetch--',
      types: fetchActionTypes,
      url: `${baseURL}/${url}`,
      requestOpts,
      onSuccess,
      onFailure,
    });
  }

  const createActionTypes = filterActionTypes(actionTypes, 'create');
  if (createActionTypes.length === 3) {
    actionCreators.create = (body, onSuccess, onFailure) => ({
      type: '--generated create--',
      types: createActionTypes,
      url: `${baseURL}/${url}`,
      requestOpts: {...requestOpts,
        method: 'POST',
        body: JSON.stringify(body),
      },
      onSuccess,
      onFailure,
    });
  }

  const updateActionTypes = filterActionTypes(actionTypes, 'update');
  if (updateActionTypes.length === 3) {
    actionCreators.create = (body, onSuccess, onFailure) => ({
      type: '--generated update--',
      types: updateActionTypes,
      url: `${baseURL}/${url}`,
      requestOpts: {...requestOpts,
        method: 'POST',
        body: JSON.stringify(body),
      },
      onSuccess,
      onFailure,
    });
  }




  return actionCreators;
};
