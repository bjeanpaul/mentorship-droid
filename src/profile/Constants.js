import { generateActionTypes } from 'src/helpers';


const types = generateActionTypes('profile', ['fetch', 'update']);
export default types;
