import React from 'react';
import { noop } from 'lodash';

import Login from 'src/views/Login';
import * as statuses from 'src/statuses/auth';
import { uidEquals } from 'app/scripts/helpers';


describe('Login', () => {
  const createComponent = (props = {}) => (
    <Login
      status={statuses.authStatusIdle()}
      onForgotPasswordPress={noop}
      onLoginPress={noop}
      onBackPress={noop}
      {...props}
    />
  );

  it('should draw', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });

  it('should call onDismissPress when the back button is pressed', () => {
    const onBackPress = jest.fn();
    const el = shallow(createComponent({ onBackPress }));

    el.findWhere(uidEquals('back'))
      .simulate('press');

    expect(onBackPress.mock.calls).toEqual([[]]);
  });

  it('should call onForgotPasswordPress when the forgot password is pressed', () => {
    const onForgotPasswordPress = jest.fn();
    const el = shallow(createComponent({ onForgotPasswordPress }));

    el.findWhere(uidEquals('forgotPassword'))
      .simulate('press');

    expect(onForgotPasswordPress.mock.calls).toEqual([[]]);
  });
});
