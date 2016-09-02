import * as constants from 'src/constants/activities';


const chooseCategory = categoryId => ({
  type: constants.CATEGORY_CHOOSE,
  payload: { categoryId },
});


const chooseActivity = activityId => ({
  type: constants.ACTIVITY_CHOOSE,
  payload: { activityId },
});


export {
  chooseCategory,
  chooseActivity,
};
