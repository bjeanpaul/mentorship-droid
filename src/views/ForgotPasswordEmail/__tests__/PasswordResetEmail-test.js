import { noop } from 'lodash';
import React from 'react';

import ForgotPasswordEmail from 'src/views/ForgotPasswordEmail';


describe('ForgotPasswordEmail', () => {
  function createComponent(props = {}) {
    return (
      <ForgotPasswordEmail
        onDismissPress={noop}
        {...props}
      />
    );
  }

  it('should render', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });
});
