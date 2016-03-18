

export const generateActionTypes = function generateActionNames(
  resource,
  operations = ['FETCH', 'CREATE', 'UPDATE', 'DELETE']
) {
  const actionTypes = {};
  const resourceUC = resource.toUpperCase();

  operations.forEach((operation) => {
    const request = `${resourceUC}_${operation}_REQUEST`;
    const success = `${resourceUC}_${operation}_SUCCESS`;
    const failure = `${resourceUC}_${operation}_FAILURE`;
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
  return [
    actionTypes[`${operation}Request`],
    actionTypes[`${operation}Success`],
    actionTypes[`${operation}Failure`],
  ];
};

export const generateActionCreators = function generateActionCreators(
  endpoint,
  actionTypes
) {
  const actionCreators = {};

  const fetchActionTypes = filterActionTypes(actionTypes, 'fetch');
  if (fetchActionTypes.length) {
    actionCreators.fetch = () => { actionTypes: fetchActionTypes };
  }


  return actionCreators;
}
