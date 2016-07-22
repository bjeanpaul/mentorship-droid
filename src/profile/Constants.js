import { generateActionTypes } from 'src/helpers';

const types = generateActionTypes('PROFILE',
  ['fetch', 'update']
);
export default types;
