import * as constants from 'src/constants/activities';
import { staticAction } from 'src/actionHelpers';


const chooseCategory = categoryId => ({
  type: constants.CATEGORY_CHOOSE,
  payload: { categoryId },
});


const chooseActivity = activityId => ({
  type: constants.ACTIVITY_CHOOSE,
  payload: { activityId },
});


const scheduleActivityCall = activityId => ({
  type: constants.ACTIVITY_SCHEDULE_CALL,
  payload: { activityId },
});


const dismissActivityScreen = staticAction(constants.ACTIVITY_SCREEN_DISMISS);


export {
  chooseCategory,
  chooseActivity,
  scheduleActivityCall,
  dismissActivityScreen,
};
