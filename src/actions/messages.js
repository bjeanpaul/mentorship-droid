import * as api from 'src/api';
import * as constants from 'src/constants/messages';
import { apiAction, dataAction, staticAction } from 'src/actionHelpers';

const { ApiResponseError } = api;


export const listMessages = apiAction({
  method: api.listMessages,
  request: staticAction(constants.MESSAGE_LIST_REQUEST),
  success: dataAction(constants.MESSAGE_LIST_SUCCESS),
  failures: [[ApiResponseError, staticAction(constants.MESSAGE_LIST_FAILURE)]],
});


export const sendMessage = data => async (dispatch, { auth }) => {
  const msg = api.createPendingMessage(data);

  dispatch({
    type: constants.MESSAGE_SEND_REQUEST,
    payload: api.setMessageSending(msg),
  });

  try {
    dispatch({
      type: constants.MESSAGE_SEND_SUCCESS,
      payload: {
        ...await api.sendMessage(msg, auth),
        pendingId: msg.id,
      },
    });
  } catch (e) {
    dispatch({
      type: constants.MESSAGE_SEND_FAILURE,
      payload: api.setMessageFailed(msg),
    });
  }
};
