import { generateActionTypes } from '../helpers';

const actionTypes = generateActionTypes('mentor', [
  'fetch',
]);

// TODO: Reset Passwords.
actionTypes.MENTOR_AUTH_TOKEN_SET = 'MENTOR_AUTH_TOKEN_SET';


export default actionTypes;
