import { getBaseURL } from 'src/configuration';

export const generateActionTypes = function generateActionNames(
  resource,
  operations = ['FETCH', 'CREATE', 'UPDATE', 'DELETE']
) {
  const actionTypes = {};
  const resourceUC = resource.toUpperCase();

  operations.forEach((operation) => {
    const operationUC = operation.toUpperCase();

    // TODO: Remove These.
    const request = `${resourceUC}_${operationUC}_REQUEST`;
    const success = `${resourceUC}_${operationUC}_SUCCESS`;
    const failure = `${resourceUC}_${operationUC}_FAILURE`;
    actionTypes[request] = request;
    actionTypes[success] = success;
    actionTypes[failure] = failure;
    // We generate duplicate "shortcut" constants that aren't dynamic so
    // that we can reference them in subsequent action generators, and reducers.
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
export const generateActionCreators = function generateActionCreators({
  path,
  actionTypes,
  requestOpts = {},
  normalizeJSON,
}) {
  const actionCreators = {};

  const fetchActionTypes = filterActionTypes(actionTypes, 'fetch');
  if (fetchActionTypes.length === 3) {
    actionCreators.fetch = (onSuccess, onFailure) => ({
      type: '--generated fetch--',
      types: fetchActionTypes,
      url: `${baseURL}/${path}/`,
      requestOpts,
      normalizeJSON,
      onSuccess,
      onFailure,
    });
  }

  const createActionTypes = filterActionTypes(actionTypes, 'create');
  if (createActionTypes.length === 3) {
    actionCreators.create = (body, onSuccess, onFailure) => ({
      type: '--generated create--',
      types: createActionTypes,
      url: `${getBaseURL}/${path}/`,
      requestOpts: {...requestOpts,
        method: 'POST',
        body: JSON.stringify(body),
      },
      normalizeJSON,
      onSuccess,
      onFailure,
    });
  }

  const updateActionTypes = filterActionTypes(actionTypes, 'update');
  if (updateActionTypes.length === 3) {
    actionCreators.update = ({
      id,
      body,
      onSuccess,
      onFailure,
    }) => ({
      type: '--generated update--',
      types: updateActionTypes,
      url: `${baseURL}/${path}/${id}/`,
      requestOpts: {...requestOpts,
        method: 'PUT',
        body: JSON.stringify(body),
      },
      normalizeJSON,
      onSuccess,
      onFailure,
    });
  }



  return actionCreators;
};
