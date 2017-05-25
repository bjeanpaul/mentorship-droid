import { noop } from 'lodash';
import React from 'react';

import ForgotPasswordEmailSent from 'src/views/ForgotPasswordEmailSent';
import { uidEquals } from 'app/scripts/helpers';

describe('ForgotPasswordEmailSent', () => {
  function createComponent(props = {}) {
    return (
      <ForgotPasswordEmailSent
        onDismissPress={noop}
        onResetPress={noop}
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

  it('should call onResetPress when the login button is pressed', () => {
    const onResetPress = jest.fn();

    const el = shallow(createComponent({ onResetPress }));

    el.findWhere(uidEquals('resetPassword'))
      .simulate('press');

    expect(onResetPress.mock.calls).toEqual([[]]);
  });
});
