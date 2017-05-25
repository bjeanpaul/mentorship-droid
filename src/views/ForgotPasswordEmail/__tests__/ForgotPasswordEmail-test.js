import { noop } from 'lodash';
import React from 'react';
import { uidEquals } from 'app/scripts/helpers';
import ForgotPasswordEmail from 'src/views/ForgotPasswordEmail';

import {
  forgotPasswordEmailStatusIdle,
  forgotPasswordEmailStatusBusy,
  forgotPasswordEmailStatusBadAddress,
} from 'src/statuses/forgotPassword';

describe('ForgotPasswordEmail', () => {
  function createComponent(props = {}) {
    return (
      <ForgotPasswordEmail
        onDismissPress={noop}
        onSendEmailPress={noop}
        status={forgotPasswordEmailStatusIdle()}
        {...props}
      />
    );
  }

  it('should render', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });

  it('should render with error message when forgotPassword status is bad address', () => {
    const status = forgotPasswordEmailStatusBadAddress();
    const component = createComponent({
      status,
    });
    expect(render(component)).toMatchSnapshot();
  });

  it('should call onDismissPress', () => {
    const onDismissPress = jest.fn();
    const el = shallow(createComponent({ onDismissPress }));

    el.findWhere(uidEquals('dismiss'))
      .simulate('press');

    expect(onDismissPress).toBeCalled();
  });

  it('should call onSendEmailPress', () => {
    const onSendEmailPress = jest.fn();
    const el = shallow(createComponent({ onSendEmailPress }));

    el.findWhere(uidEquals('sendEmail'))
      .simulate('press');

    expect(onSendEmailPress).toBeCalled();
  });

  it('should not allow button to be pressed when forgotPassword status is busy', () => {
    const status = forgotPasswordEmailStatusBusy();
    const el = shallow(createComponent({
      status,
    }));

    expect(el.findWhere(uidEquals('sendEmail')).prop('disabled')).toBe(true);
  });
});
