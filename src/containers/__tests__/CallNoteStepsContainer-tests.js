import { completedMapDispatchToProps } from 'src/containers/CallNoteStepsContainer';
import { fakeState, fakeActivity, fakeCategory } from 'app/scripts/helpers';


describe('CallNoteStepsContainer', () => {
  describe('completedMapDispatchToProps', () => {
    it('should provide the activity objective and category color', () => {
      expect(completedMapDispatchToProps(fakeState({
        callNote: { callNote: {} },
        entities: {
          categories: {
            23: fakeCategory({
              id: 23,
              color: 'orange',
            }),
          },
          activities: {
            11: fakeActivity({
              id: 11,
              category: 23,
              objective: 'to eat ice-cream',
            }),
          },
        },
      }), {
        activityId: 11,
      })).toEqual({
        color: 'orange',
        objective: 'to eat ice-cream',
        completed: void 0,
      });
    });
  });
});
