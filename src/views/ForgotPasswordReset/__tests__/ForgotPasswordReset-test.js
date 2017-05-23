import { noop } from 'lodash';
import React from 'react';
// import { uidEquals } from 'app/scripts/helpers';
import ForgotPasswordReset from 'src/views/ForgotPasswordReset';

import {
  forgotPasswordResetStatusIdle,
  forgotPasswordResetStatusBusy,
  forgotPasswordResetStatusBadToken,
} from 'src/statuses/forgotPassword';

describe('ForgotPasswordReset', () => {
  function createComponent(props = {}) {
    return (
      <ForgotPasswordReset
        onBackPress={noop}
        onLoginPress={noop}
        status={forgotPasswordResetStatusIdle()}
        {...props}
      />
    );
  }

  it('should render', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });

  it('should render as busy when status is busy', () => {
    const status = forgotPasswordResetStatusBusy();
    const el = createComponent({
      status,
    });

    expect(render(el)).toMatchSnapshot();
  });

  it('should render password token error', () => {
    const status = forgotPasswordResetStatusBadToken();
    const el = createComponent({
      status,
    });

    expect(render(el)).toMatchSnapshot();
  });

  // it('should call onBackPress', () => {
  //   const onBackPress = jest.fn();
  //   const el = shallow(createComponent({ onBackPress }));

  //   el.findWhere(uidEquals('back'))
  //     .simulate('press');

  //   expect(onBackPress).toBeCalled();
  // });

  it(('should display the password mismatch error message '
      + 'when passwords are mismatched'), () => {
    const el = render(createComponent());
    el.getInstance().setState({
      newPassword: 'foo',
      checkNewPassword: 'f',
    });
    expect(el.toJSON()).toMatchSnapshot();
  });

  it(('should not display the password mismatch error message '
      + 'when passwords are matched'), () => {
    const el = render(createComponent());
    el.getInstance().setState({
      newPassword: 'foo',
      checkNewPassword: 'foo',
    });
    expect(el.toJSON()).toMatchSnapshot();
  });
});
