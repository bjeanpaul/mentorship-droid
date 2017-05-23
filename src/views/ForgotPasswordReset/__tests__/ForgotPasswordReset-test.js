import { noop } from 'lodash';
import React from 'react';
import { uidEquals } from 'app/scripts/helpers';
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


  it(('should display the password mismatch error message '
      + 'when passwords are mismatched'), () => {
    const el = render(createComponent({
      initialNewPassword: 'foo',
      initialCheckNewPassword: 'foo',
    }));

    expect(el.toJSON()).toMatchSnapshot();
  });

  it(('should not display the password mismatch error message '
      + 'when passwords are matched'), () => {
    const el = render(createComponent({
      initialNewPassword: 'foo',
      initialCheckNewPassword: 'foo',
    }));
    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should call onBackPress', () => {
    const onBackPress = jest.fn();
    const el = shallow(createComponent({ onBackPress }));

    el.findWhere(uidEquals('back'))
      .simulate('press');

    expect(onBackPress).toBeCalled();
  });

  it('should call onLoginPress', () => {
    const onLoginPress = jest.fn();
    const el = shallow(createComponent({ onLoginPress }));

    el.findWhere(uidEquals('submit'))
      .simulate('press');

    expect(onLoginPress).toBeCalled();
  });
});
