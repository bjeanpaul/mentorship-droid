import { generateActionCreators } from 'src/helpers';


import actionTypes from './Constants';
export default generateActionCreators({
  resource: 'schedule',
  actionTypes,
);
