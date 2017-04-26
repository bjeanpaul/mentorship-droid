import * as routes from 'src/constants/routes';
import * as callNotes from 'src/constants/callNotes';
import { createRoute, push, replaceOrPush } from 'src/navigationHelpers';


export default (state, action) => {
  switch (action.type) {
    case callNotes.CALL_NOTE_CREATE_OPEN: {
      const { payload: { callId } } = action;
      const route = createRoute(routes.ROUTE_CREATE_CALL_NOTES, { callId });
      return replaceOrPush(state, routes.ROUTE_CALL_COMPLETED, route);
    }

    case callNotes.CALL_NOTE_RETROACTIVELY_CREATE_OPEN: {
      const { payload: { callId } } = action;
      const route = createRoute(routes.ROUTE_CREATE_CALL_NOTES, { callId });
      return replaceOrPush(state, routes.ROUTE_CALL_COMPLETED, route);
    }

    case callNotes.CALL_NOTE_CREATE_REQUEST: {
      const route = createRoute(routes.ROUTE_CALL_NOTE_SAVING);
      return replaceOrPush(state, routes.ROUTE_CREATE_CALL_NOTES, route);
    }

    case callNotes.CALL_NOTE_CREATE_SUCCESS: {
      const {
        payload: {
          result: callNoteId,
        },
      } = action;
      const route = createRoute(routes.ROUTE_CALL_NOTE_SAVED, { callNoteId });
      return replaceOrPush(state, routes.ROUTE_CALL_NOTE_SAVING, route);
    }

    case callNotes.CALL_NOTE_CHOOSE: {
      const { payload: { callNoteId } } = action;
      const route = createRoute(routes.ROUTE_CALL_NOTE_DETAIL, { callNoteId });
      return push(state, route);
    }

    case callNotes.CALL_NOTES_VIEW_ALL: {
      return push(state, createRoute(routes.ROUTE_CALL_NOTE_LIST));
    }

    default:
      return state;
  }
};
