import { noop } from 'lodash';
import React from 'react';
import { uidEquals } from 'app/scripts/helpers';
import ForgotPasswordEmail from 'src/views/ForgotPasswordEmail';


describe('ForgotPasswordEmail', () => {
  function createComponent(props = {}) {
    return (
      <ForgotPasswordEmail
        onDismissPress={noop}
        onSendEmailPress={noop}
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

    expect(onDismissPress).toBeCalled();
  });

  it('should call onSendEmailPress', () => {
    const onSendEmailPress = jest.fn();
    const el = shallow(createComponent({ onSendEmailPress }));

    el.findWhere(uidEquals('sendEmail'))
      .simulate('press');

    expect(onSendEmailPress).toBeCalled();
  });
});
