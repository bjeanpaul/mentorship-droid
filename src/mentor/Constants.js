import { generateActionTypes } from 'src/helpers';

const actionTypes = generateActionTypes('mentor', [
  'fetch',
]);

actionTypes.MENTOR_AUTH_TOKEN_SET = 'MENTOR_AUTH_TOKEN_SET';

export default actionTypes;
