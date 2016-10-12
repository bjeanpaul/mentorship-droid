import { completedMapDispatchToProps } from 'src/containers/CallNoteStepsContainer';
import { fakeState, fakeCall, fakeActivity, fakeCategory } from 'app/scripts/helpers';


describe('CallNoteStepsContainer', () => {
  describe('completedMapDispatchToProps', () => {
    it('should provide the activity objective and category color', () => {
      const call = fakeCall({
        id: 20,
        activity: 11,
      });

      const state = fakeState({
        callNote: {
          callNote: {},
        },
        calls: {
          20: call,
        },
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
      });

      expect(completedMapDispatchToProps(state, { call }))
        .toEqual({
          color: 'orange',
          objective: 'to eat ice-cream',
          completed: void 0,
        });
    });
  });
});
