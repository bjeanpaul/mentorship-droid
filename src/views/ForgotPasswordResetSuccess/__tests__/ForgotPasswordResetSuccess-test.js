import { noop } from 'lodash';
import React from 'react';

import ForgotPasswordResetSuccess from 'src/views/ForgotPasswordResetSuccess';
import { uidEquals } from 'app/scripts/helpers';

describe('ForgotPasswordResetSuccess', () => {
  function createComponent(props = {}) {
    return (
      <ForgotPasswordResetSuccess
        onDismissPress={noop}
        onLoginPress={noop}
        {...props}
      />
    );
  }

  it('should render', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });

  it('should call onDismissPress', () => {
    const onDismissPress = jest.fn();

    const el = shallow(createComponent({ onDismissPress }));

    el.findWhere(uidEquals('dismiss'))
      .simulate('press');

    expect(onDismissPress.mock.calls).toEqual([[]]);
  });

  it('should call onLoginPress when the login button is pressed', () => {
    const onLoginPress = jest.fn();

    const el = shallow(createComponent({ onLoginPress }));

    el.findWhere(uidEquals('login'))
      .simulate('press');

    expect(onLoginPress.mock.calls).toEqual([[]]);
  });
});
