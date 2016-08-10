import { generateActionTypes } from 'src/helpers';


export const actionTypes = generateActionTypes('profile', ['fetch', 'update']);
actionTypes.image = generateActionTypes('profile/image', ['update']);
export default actionTypes;
