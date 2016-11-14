import {
  mapStateToProps,
  savingMapStateToProps,
  completedMapDispatchToProps,
} from 'src/containers/CallNoteStepsContainer';

import {
  fakeState,
  fakeCall,
  fakeActivity,
  fakeCategory,
  fakeCallNote,
} from 'app/scripts/helpers';


describe('CallNoteStepsContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide props for the given prop names', () => {
      const callNote = fakeCallNote({ reflection: 'foo' });

      const state = fakeState({
        callNote: { callNote },
      });

      expect(mapStateToProps('reflection')(state)).toEqual({
        reflection: 'foo',
      });
    });
  });

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
          objectiveAchieved: void 0,
        });
    });
  });

  describe('savingMapStateToProps', () => {
    it('should provide the call note data', () => {
      const call = fakeCall({ id: 20 });
      const callNote = fakeCallNote({ call: 20 });

      const state = fakeState({
        callNote: { callNote },
      });

      expect(savingMapStateToProps(state, { call }))
        .toEqual(jasmine.objectContaining({ callNote }));
    });
  });
});
