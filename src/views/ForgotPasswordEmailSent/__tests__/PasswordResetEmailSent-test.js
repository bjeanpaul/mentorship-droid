import { noop } from 'lodash';
import React from 'react';

import ForgotPasswordEmailSent from 'src/views/ForgotPasswordEmailSent';
import { uidEquals } from 'app/scripts/helpers';

describe('ForgotPasswordEmailSent', () => {
  function createComponent(props = {}) {
    return (
      <ForgotPasswordEmailSent
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

    el.findWhere(uidEquals('logIn'))
      .simulate('press');

    expect(onLoginPress.mock.calls).toEqual([[]]);
  });
});
