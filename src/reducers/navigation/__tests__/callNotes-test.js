import reduce from 'src/reducers/navigation/callNotes';
import * as callNotes from 'src/actions/callNotes';
import * as routes from 'src/constants/routes';

import {
  createStack,
  createRoute,
  push,
  replaceAt,
} from 'src/navigationHelpers';

import { fakeCallNote, fakeCallNoteData } from 'app/scripts/helpers';


describe('src/reducers/navigation/callNotes', () => {
  describe('CALL_NOTE_CREATE_OPEN', () => {
    it('should replace the call completed route with create call notes route', () => {
      const state = push(createStack(), createRoute(routes.ROUTE_CALL_COMPLETED));
      const route = createRoute(routes.ROUTE_CREATE_CALL_NOTES, { callId: 23 });

      expect(reduce(state, callNotes.openCreateCallNote({ callId: 23 })))
        .toEqual(replaceAt(state, routes.ROUTE_CALL_COMPLETED, route));
    });

    it('should push on the create call notes route there is no call completed route', () => {
      expect(reduce(createStack(), callNotes.openCreateCallNote({
        callId: 23,
      })))
      .toEqual(push(createStack(), createRoute(routes.ROUTE_CREATE_CALL_NOTES, {
        callId: 23,
      })));
    });
  });

  describe('CALL_NOTE_RETROACTIVELY_CREATE_OPEN', () => {
    it('should replace the call completed route with create call notes route', () => {
      const state = push(createStack(), createRoute(routes.ROUTE_CALL_COMPLETED));
      const route = createRoute(routes.ROUTE_CREATE_CALL_NOTES, { callId: 23 });

      expect(reduce(state, callNotes.openRetroactivelyCreateCallNote({ callId: 23 })))
        .toEqual(replaceAt(state, routes.ROUTE_CALL_COMPLETED, route));
    });

    it('should push on the create call notes route there is no call completed route', () => {
      expect(reduce(createStack(), callNotes.openRetroactivelyCreateCallNote({
        callId: 23,
      })))
      .toEqual(push(createStack(), createRoute(routes.ROUTE_CREATE_CALL_NOTES, {
        callId: 23,
      })));
    });
  });

  describe('CALL_NOTE_CREATE_REQUEST', () => {
    it('should replace the call note create route with the saving route', () => {
      const action = callNotes.createCallNote.request();

      const oldRoute = createRoute(routes.ROUTE_CREATE_CALL_NOTES, { callId: 23 });
      const newRoute = createRoute(routes.ROUTE_CALL_NOTE_SAVING);

      const state = push(createStack(), oldRoute);

      expect(reduce(state, action))
        .toEqual(replaceAt(state, routes.ROUTE_CREATE_CALL_NOTES, newRoute));
    });

    it('should push on the call note saving route if there is no create route', () => {
      const action = callNotes.createCallNote.request();
      const route = createRoute(routes.ROUTE_CALL_NOTE_SAVING);

      expect(reduce(createStack(), action))
        .toEqual(push(createStack(), route));
    });
  });

  describe('CALL_NOTE_CREATE_SUCCESS', () => {
    it('should replace the saving route with the saved route', () => {
      const callNote = fakeCallNote({ id: 23 });
      const action = callNotes.createCallNote.success(fakeCallNoteData(callNote));

      const oldRoute = createRoute(routes.ROUTE_CALL_NOTE_SAVING);
      const newRoute = createRoute(routes.ROUTE_CALL_NOTE_SAVED, { callNoteId: 23 });

      const state = push(createStack(), oldRoute);

      expect(reduce(state, action))
        .toEqual(replaceAt(state, routes.ROUTE_CALL_NOTE_SAVING, newRoute));
    });

    it('should push on the call note saved route if there is no create route', () => {
      const callNote = fakeCallNote({ id: 23 });
      const action = callNotes.createCallNote.success(fakeCallNoteData(callNote));
      const route = createRoute(routes.ROUTE_CALL_NOTE_SAVED, { callNoteId: 23 });

      expect(reduce(createStack(), action))
        .toEqual(push(createStack(), route));
    });
  });

  describe('CALL_NOTE_CHOOSE', () => {
    it('should push on the call note detail route', () => {
      const state = createStack();
      const route = createRoute(routes.ROUTE_CALL_NOTE_DETAIL, { callNoteId: 21 });

      expect(reduce(state, callNotes.chooseCallNote(21)))
        .toEqual(push(state, route));
    });
  });
});
