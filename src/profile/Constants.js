import { generateActionTypes } from 'src/helpers';

const types = generateActionTypes('PROFILE',
  ['fetch', 'create', 'update']
);
export default types;
