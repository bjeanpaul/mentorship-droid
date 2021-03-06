import reduce, { createInitialState } from 'src/reducers/callNotes';
import * as actions from 'src/actions/callNotes';
import { fakeState, fakeCallNoteV2 } from 'app/scripts/helpers';
import { logout } from 'src/actions/auth';
import * as constants from 'src/constants/callNotes';
import { createStack, createRoute, jumpToIndex } from 'src/navigationHelpers';


describe('reducers/callNotes', () => {
  describe('CALL_NOTES_CHANGE_CALL_NOTE', () => {
    it('should update the current call note state with state in the payload', () => {
      const { callNote: { reflections, mood } } = reduce(void 0, actions.changeCallNote({
        reflections: 'Cheese is amazing.',
        mood: 'savage',
      }));

      expect(reflections).toEqual('Cheese is amazing.');
      expect(mood).toEqual('savage');
    });
  });

  describe('CALL_NOTE_CREATE_OPEN', () => {
    it('should reset the draft call note state to the initial state', () => {
      const { callNote } = reduce(void 0, actions.openCreateCallNote(23));

      expect(callNote)
        .toEqual(createInitialState().callNote);
    });

    it('should set metadata to indicate that the call note is being created immediately', () => {
      const { metadata } = reduce(void 0, actions.openCreateCallNote(23));

      expect(metadata)
        .toEqual(jasmine.objectContaining({ actionType: constants.ADD_IMMEDIATE }));
    });
  });

  describe('CALL_NOTE_RETROACTIVELY_CREATE_OPEN', () => {
    it('should reset the draft call note state to the initial state', () => {
      const { callNote } = reduce(void 0, actions.openRetroactivelyCreateCallNote(23));

      expect(callNote)
        .toEqual(createInitialState().callNote);
    });

    it('should set metadata to indicate that the call note is being created retroactively', () => {
      const { metadata } = reduce(void 0, actions.openRetroactivelyCreateCallNote(23));
      expect(metadata)
        .toEqual(jasmine.objectContaining({ actionType: constants.ADD_RETROACTIVELY }));
    });
  });

  describe('CALL_NOTE_CREATE_REQUEST', () => {
    it('should mark the call note as sending', () => {
      const { callNote: { isSending } } = reduce(void 0, {
        type: 'CALL_NOTE_CREATE_REQUEST',
      });

      expect(isSending).toBe(true);
    });
  });

  describe('AUTH_LOGOUT', () => {
    it('should reset to initial state', () => {
      expect(reduce(fakeState().callNote, logout()))
        .toEqual(createInitialState());
    });
  });

  describe('V2_STEP_NEXT', () => {
    it('should move forward a step', () => {
      let steps = createStack([
        createRoute('A'),
        createRoute('B'),
      ]);

      steps = jumpToIndex(steps, 0);

      const { callNote: state } = fakeState({
        callNote: { steps },
      });

      expect(reduce(state, actions.v2StepNext()))
        .toEqual(jasmine.objectContaining({
          steps: jumpToIndex(steps, 1),
        }));
    });

    it('should skip activity steps if there is no activity', () => {
      for (const step of ([
        constants.V2_STEP_RATING,
        constants.V2_STEP_OBJECTIVE_ACHIEVED,
      ])) {
        let steps = createStack([
          createRoute('A'),
          createRoute(step),
          createRoute('B'),
        ]);

        steps = jumpToIndex(steps, 0);

        const { callNote: state } = fakeState({
          callNote: {
            steps,
            callNote: fakeCallNoteV2({
              activity: null,
            }),
          },
        });

        expect(reduce(state, actions.v2StepNext()))
          .toEqual(jasmine.objectContaining({
            steps: jumpToIndex(steps, 2),
          }));
      }
    });
  });

  describe('V2_STEP_BACK', () => {
    it('should move back a step', () => {
      let steps = createStack([
        createRoute('A'),
        createRoute('B'),
      ]);

      steps = jumpToIndex(steps, 1);

      const { callNote: state } = fakeState({
        callNote: { steps },
      });

      expect(reduce(state, actions.v2StepBack()))
        .toEqual(jasmine.objectContaining({
          steps: jumpToIndex(steps, 0),
        }));
    });

    it('should skip activity steps if there is no activity', () => {
      for (const step of ([
        constants.V2_STEP_RATING,
        constants.V2_STEP_OBJECTIVE_ACHIEVED,
      ])) {
        const steps = createStack([
          createRoute('A'),
          createRoute(step),
          createRoute('B'),
        ]);

        const { callNote: state } = fakeState({
          callNote: {
            steps,
            callNote: fakeCallNoteV2({
              activity: null,
            }),
          },
        });

        expect(reduce(state, actions.v2StepBack()))
          .toEqual(jasmine.objectContaining({
            steps: jumpToIndex(steps, 0),
          }));
      }
    });
  });

  describe('CALL_NOTE_ACTIVITY_CHOOSE', () => {
    it('should reset the activity progress', () => {
      const { callNote } = reduce(void 0, actions.chooseCallNoteActivity(23));

      expect(callNote)
        .toEqual(jasmine.objectContaining({
          activityProgress: void 0,
        }));
    });

    it('should update the activity id with the id in the payload', () => {
      const { callNote } = reduce(void 0, actions.chooseCallNoteActivity(23));

      expect(callNote)
        .toEqual(jasmine.objectContaining({
          activity: 23,
        }));
    });
  });
});
