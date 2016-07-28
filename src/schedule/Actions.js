import { normalize, Schema, arrayOf } from 'normalizr';

import { generateActionCreators } from 'src/helpers';
import actionTypes from './Constants';

const scheduleSchema = new Schema('schedule');


// i'm wondering if it's helpful to wrap the generic responses

export default generateActionCreators({
  resourcePath: 'schedule',
  actionTypes,
  normalizeJSON: ({ json, response }) => {
    return {
      json: json.results ?
        normalize(json.results, arrayOf(scheduleSchema))
        : normalize(json, scheduleSchema),
      response,
    }
  },
});
