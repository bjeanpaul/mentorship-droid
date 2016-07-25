import { generateActionCreators } from 'src/helpers';

import actionTypes from './Constants';
import { profilesSchema } from './Models';

export default generateActionCreators('profile', actionTypes, {}, profilesSchema);
