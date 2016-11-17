import { mapStateToProps } from 'src/containers/CallNoteStepsContainer';

import {
  fakeState,
  fakeCall,
  fakeActivity,
  fakeCategory,
  fakeCallNote,
} from 'app/scripts/helpers';


describe('CallNoteStepsContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide the call note', () => {
      const call = fakeCall();
      const callNote = fakeCallNote();

      const state = fakeState({
        callNote: { callNote },
      });

      expect(mapStateToProps(state, { call }).callNote).toEqual({
        call: call.id,
        ...callNote,
      });
    });

    it('should provide the activity if relevant', () => {
      const call1 = fakeCall({ activity: void 0 });
      const call2 = fakeCall({ activity: 23 });
      const activity = fakeActivity({ id: 23 });
      const callNote = fakeCallNote();

      const state = fakeState({
        callNote: { callNote },
        entities: {
          activities: {
            23: activity,
          },
        },
      });

      expect(mapStateToProps(state, { call: call1 }).activity).toEqual(void 0);
      expect(mapStateToProps(state, { call: call2 }).activity).toEqual(activity);
    });

    it('should provide the category if relevant', () => {
      const call1 = fakeCall({ activity: void 0 });
      const call2 = fakeCall({ activity: 20 });
      const call3 = fakeCall({ activity: 23 });
      const category = fakeCategory({ id: 21 });

      const callNote = fakeCallNote();

      const state = fakeState({
        callNote: { callNote },
        entities: {
          activities: {
            23: fakeActivity({
              id: 23,
              category: 21,
            }),
          },
          category: {
            21: category,
          },
        },
      });

      expect(mapStateToProps(state, { call: call1 }).category).toEqual(void 0);
      expect(mapStateToProps(state, { call: call2 }).category).toEqual(void 0);
      expect(mapStateToProps(state, { call: call3 }).category).toEqual(category);
    });
  });
});
