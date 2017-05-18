import * as constants from 'src/statuses/forgotPassword';

export const createInitialState = () => ({
  status: constants.FORGOT_PASSWORD_EMAIL_STATUS_IDLE,
});


export default (state = createInitialState(), action) => {
  switch (action.type) {
    default:
      return state;
  }
};
