

export const generateActionNames = function generateActionNames(name) {
  const actionTypes = {};
  const resourceName = name.toUpper();
  ['FETCH', 'CREATE', 'UPDATE', 'DELETE'].forEach((actionName) => {
    const request = `${resourceName}_${actionName}_REQUEST`;
    const success = `${resourceName}_${actionName}_SUCCESS`;
    const failure = `${resourceName}_${actionName}_FAILURE`;
    actionTypes[request] = request;
    actionTypes[success] = success;
    actionTypes[failure] = failure;
  });
  return actionTypes;
};




export function callScheduleEndpoint(types, method, body, scheduleId) {
  const url = scheduleId ? `/schedule/${scheduleId}/` : '/schedule/';
  return {
    types,
    request: requestForAPI(url, {
      method,
      body: JSON.stringify(body),
    }),
  };
}
