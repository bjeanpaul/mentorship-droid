import { noop } from 'lodash';
import React from 'react';

import ForgotPasswordReset from 'src/views/ForgotPasswordReset';


describe('ForgotPasswordReset', () => {
  function createComponent(props = {}) {
    return (
      <ForgotPasswordReset
        onDismissPress={noop}
        {...props}
      />
    );
  }

  it('should render', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });

  // TODO - tests for status
  // TODO - tests for button enabled/disabled
});
