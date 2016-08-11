import { getBaseURL } from 'src/configuration';
import { omitBy, isNull } from 'lodash';


export const conj = (...args) => Object.assign({}, ...args);


export const omitNulls = d => omitBy(d, isNull);


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
  resourcePath,
  actionTypes,
  requestOpts = {},
  normalizeJSON,
}) {
  const actionCreators = {};
  let url = `${getBaseURL()}/`;
  if (resourcePath) {
    url += `${resourcePath}/`;
  }

  const fetchActionTypes = filterActionTypes(actionTypes, 'fetch');
  if (fetchActionTypes.length === 3) {
    actionCreators.fetch = (onSuccess, onFailure) => ({
      type: '--generated fetch--',
      types: fetchActionTypes,
      url,
      requestOpts,
      normalizeJSON,
      onSuccess,
      onFailure,
    });
  }

  const createActionTypes = filterActionTypes(actionTypes, 'create');
  if (createActionTypes.length === 3) {
    actionCreators.create = ({
      body,
      onSuccess,
      onFailure,
    }) => ({
      type: '--generated create--',
      types: createActionTypes,
      url,
      requestOpts: { ...requestOpts,
        method: 'POST',
        body: JSON.stringify(body),
      },
      normalizeJSON,
      onSuccess,
      onFailure,
    });
  }

  // id is required as an argument to update a record;
  // we have a scenario with profiless, where it's
  // profile/{id}/image,
  // which is awkward...
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
      url: `${url}${id}/`,
      requestOpts: { ...requestOpts,
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
