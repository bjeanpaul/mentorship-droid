import { mapStateToProps } from 'src/containers/CallNoteStepsContainer';
import { createStack, createRoute } from 'src/navigationHelpers';

import {
  fakeState,
  fakeCall,
  fakeActivity,
  fakeCategory,
  fakeCallNote,
  fakeCallNoteMetadata,
} from 'app/scripts/helpers';


describe('CallNoteStepsContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide the call note', () => {
      const call = fakeCall({ id: 2 });
      const callNote = fakeCallNote();

      const state = fakeState({
        callNote: { callNote },
        entities: {
          calls: {
            2: call,
          },
        },
      });

      expect(mapStateToProps(state, { callId: 2 }).callNote).toEqual({
        call: 2,
        ...callNote,
      });
    });

    it('should provide the activity if relevant', () => {
      const call1 = fakeCall({
        id: 1,
        activity: void 0,
      });

      const call2 = fakeCall({
        id: 2,
        activity: 23,
      });

      const activity = fakeActivity({ id: 23 });
      const callNote = fakeCallNote();

      const state = fakeState({
        callNote: { callNote },
        entities: {
          calls: {
            1: call1,
            2: call2,
          },
          activities: {
            23: activity,
          },
        },
      });

      expect(mapStateToProps(state, { callId: 1 }).activity).toEqual(void 0);
      expect(mapStateToProps(state, { callId: 2 }).activity).toEqual(activity);
    });

    it('should provide the overridden activity if relevant', () => {
      const call = fakeCall({
        id: 2,
        activity: 23,
      });

      const activity = fakeActivity({ id: 23 });
      const callNote = fakeCallNote({ activity: 23 });

      const state = fakeState({
        callNote: {
          callNote,
        },
        entities: {
          calls: {
            2: call,
          },
          activities: {
            21: fakeActivity({ id: 21 }),
            23: activity,
          },
        },
      });

      expect(mapStateToProps(state, { callId: 2 }).activity)
        .toEqual(activity);
    });

    it('should provide the category if relevant', () => {
      const call1 = fakeCall({
        id: 1,
        activity: void 0,
      });

      const call2 = fakeCall({
        id: 2,
        activity: 20,
      });

      const call3 = fakeCall({
        id: 3,
        activity: 23,
      });

      const category = fakeCategory({ id: 21 });

      const callNote = fakeCallNote();

      const state = fakeState({
        callNote: { callNote },
        entities: {
          calls: {
            1: call1,
            2: call2,
            3: call3,
          },
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

      expect(mapStateToProps(state, { callId: 1 }).category).toEqual(void 0);
      expect(mapStateToProps(state, { callId: 2 }).category).toEqual(void 0);
      expect(mapStateToProps(state, { callId: 3 }).category).toEqual(category);
    });

    it('should provide step navigation state', () => {
      const steps = createStack([
        createRoute('A'),
        createRoute('B'),
      ]);

      const state = fakeState({
        callNote: { steps },
        entities: {
          calls: {
            1: fakeCall(),
          },
        },
      });

      expect(mapStateToProps(state, { callId: 1 }).steps)
        .toEqual(steps);
    });

    it('should provide metadata', () => {
      const metadata = fakeCallNoteMetadata();
      const state = fakeState({
        callNote: { metadata },
        entities: {
          calls: {
            1: fakeCall(),
          },
        },
      });

      expect(mapStateToProps(state, { callId: 1 }).metadata)
        .toEqual(metadata);
    });
  });
});
