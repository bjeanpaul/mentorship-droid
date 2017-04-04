import request from 'src/api/request';


const requestForgotPasswordReset = data => request({
  url: '/reset-password/',
  method: 'POST',
  data,
});


const resetForgotPassword = data => request({
  url: '/confirm-password/',
  method: 'POST',
  data: {
    ...data,

    // we should be validating the password confirmation client side, so asking
    // the server to validate this is redundant and means more logic we'd need
    // on the client side to handle that response
    checkNewPassword: data.newPassword,
  },
});


export {
  requestForgotPasswordReset,
  resetForgotPassword,
};
