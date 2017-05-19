import { noop } from 'lodash';
import React from 'react';

import ForgotPasswordEmailSent from 'src/views/ForgotPasswordEmailSent';


describe('ForgotPasswordEmailSent', () => {
  function createComponent(props = {}) {
    return (
      <ForgotPasswordEmailSent
        onDismissPress={noop}
        {...props}
      />
    );
  }

  it('should render', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });
});
