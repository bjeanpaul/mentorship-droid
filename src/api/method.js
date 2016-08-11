import { extend } from 'lodash';
import request from 'src/api/request';


const method = definition => extend(
  (...args) => request(definition(...args)),
  {definition});


export default method;
