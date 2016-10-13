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
        payload: { categoryId: 21 },
      });
    });
  });

  describe('scheduleActivityCall', () => {
    it('should create for choosing a category', () => {
      expect(actions.scheduleActivityCall(21)).toEqual({
        type: constants.ACTIVITY_SCHEDULE_CALL,
        payload: { activityId: 21 },
      });
    });
  });

  describe('viewActivityCallNotes', () => {
    it('should create for viewing call notes', () => {
      expect(actions.viewActivityCallNotes(21)).toEqual({
        type: constants.ACTIVITY_CALL_NOTES_VIEW,
        payload: { activityId: 21 },
      });
    });
  });
});
