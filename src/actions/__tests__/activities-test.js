import * as actions from 'src/actions/activities';
import * as constants from 'src/constants/activities';


describe('actions/activities', () => {
  describe('chooseActivity', () => {
    it('should create for choosing an activity', () => {
      expect(actions.chooseActivity(23)).toEqual({
        type: constants.ACTIVITY_CHOOSE,
        payload: { activityId: 23 },
      });
    });
  });

  describe('chooseCategory', () => {
    it('should create for choosing a category', () => {
      expect(actions.chooseCategory(21)).toEqual({
        type: constants.CATEGORY_CHOOSE,
        payload: { categoryId: 23 },
      });
    });
  });
});
