import actionTypes from './Constants';
import { generateActionCreators } from 'src/helpers';

export const actions = generateActionCreators('profile/', actionTypes);
