import { generateActionCreators } from '../helpers';

import actionTypes from './ScheduleConstants';

const actionCreators = generateActionCreators('schedule', actionTypes);
export const fetchSchedules = actionCreators.fetch;
