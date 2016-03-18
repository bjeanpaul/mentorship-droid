

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

export const generateActionCreators = function generateActionCreators(
  endpoint,
  actionTypes
) {
  const actionCreators = {};

  const fetchActionTypes = filterActionTypes(actionTypes, 'fetch');
  if (fetchActionTypes.length === 3) {
    actionCreators.fetch = () => ({
      types: fetchActionTypes,
      request: {
        endpoint,
      },
    });
  }


  return actionCreators;
};
