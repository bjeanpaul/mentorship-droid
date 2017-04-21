import { mapStateToProps } from 'src/containers/CallNoteListContainer';
import { fakeCallNote, fakeCall } from 'app/scripts/helpers';


describe('CallNoteListContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide calls and call notes in an array of objects', () => {
      const call1 = fakeCall({ id: 1 });
      const call2 = fakeCall({ id: 2 });
      const callNote1 = fakeCallNote({
        id: 21,
        call: 1,
      });
      const callNote2 = fakeCallNote({
        id: 100,
        call: 2,
      });
      const time1 = callNote1.callStartTime;
      const time2 = callNote2.callStartTime;

      const state = {
        entities: {
          calls: {
            1: call1,
            2: call2,
          },
          callNotes: {
            21: callNote1,
            100: callNote2,
          },
        },
      };

      expect(mapStateToProps(state, {}))
        .toEqual(jasmine.objectContaining({
          callsAndCallNotes: [
            {
              callNote: callNote1,
              call: call1,
              time: time1,
            },
            {
              callNote: callNote2,
              call: call2,
              time: time2,
            },
          ],
        }));
    });

    it('should provide all call notes for the given activity', () => {
      const call1 = fakeCall({
        id: 1,
        activity: 50,
      });
      const call2 = fakeCall({
        id: 2,
        activity: 50,
      });
      const callNote1 = fakeCallNote({
        id: 21,
        call: 1,
      });
      const callNote2 = fakeCallNote({
        id: 100,
        call: 2,
      });
      const time1 = callNote1.callStartTime;
      const time2 = callNote2.callStartTime;

      const state = {
        entities: {
          calls: {
            1: call1,
            2: call2,
            3: fakeCall({
              id: 3,
              activity: 20,
            }),
          },
          callNotes: {
            21: callNote1,
            100: callNote2,
          },
        },
      };

      expect(mapStateToProps(state, { activity: 50 }))
        .toEqual(jasmine.objectContaining({
          callsAndCallNotes: [
            {
              callNote: callNote1,
              call: call1,
              time: time1,
            },
            {
              callNote: callNote2,
              call: call2,
              time: time2,
            },
          ],
        })
      );
    });

    it('should provide calls and call notes and order them by call start time', () => {
      const call1 = fakeCall({ id: 1 });
      const call2 = fakeCall({ id: 2 });
      const callNote1 = fakeCallNote({
        id: 21,
        call: 1,
        callStartTime: '2016-09-28T17:34Z',
      });
      const callNote2 = fakeCallNote({
        id: 100,
        call: 2,
        callStartTime: '2017-09-28T17:34Z',
      });
      const time1 = callNote1.callStartTime;
      const time2 = callNote2.callStartTime;

      const state = {
        entities: {
          calls: {
            1: call1,
            2: call2,
          },
          callNotes: {
            21: callNote1,
            100: callNote2,
          },
        },
      };

      expect(mapStateToProps(state, {}))
        .toEqual(jasmine.objectContaining({
          callsAndCallNotes: [
            {
              callNote: callNote2,
              call: call2,
              time: time2,
            },
            {
              callNote: callNote1,
              call: call1,
              time: time1,
            },
          ],
        })
      );
    });

    it('should add the timestamp of a callNote or the call Start Time if callNote does not exist', () => {
      const call1 = fakeCall({ id: 1 });
      const callNote1 = fakeCallNote({
        id: 21,
        call: 1,
        callStartTime: '2016-09-28T17:34Z',
      });

      const call2 = fakeCall({
        id: 2,
        startTime: '2017-09-28T17:34Z',
      });

      const time1 = callNote1.callStartTime;
      const time2 = call2.startTime;

      const state = {
        entities: {
          calls: {
            1: call1,
            2: call2,
          },
          callNotes: {
            21: callNote1,
          },
        },
      };

      expect( mapStateToProps(state, {}) )
        .toEqual(jasmine.objectContaining({
          callsAndCallNotes: [
            {
              callNote: null,
              call: call2,
              time: time2,
            },
            {
              callNote: callNote1,
              call: call1,
              time: time1,
            },
          ],
        })
      );

    });
  });
});
