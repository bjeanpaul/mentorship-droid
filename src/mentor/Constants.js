import { generateActionTypes } from 'src/helpers';

// Change these two profile.
const actionTypes = generateActionTypes('mentor', ['fetch']);
actionTypes.resetPassword = generateActionTypes('mentor_reset_password', ['create']);
actionTypes.MENTOR_AUTH_TOKEN_SET = 'MENTOR_AUTH_TOKEN_SET';

export default actionTypes;
