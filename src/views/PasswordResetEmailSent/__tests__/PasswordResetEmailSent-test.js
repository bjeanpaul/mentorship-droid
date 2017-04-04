import { noop } from 'lodash';
import React from 'react';

import PasswordResetEmailSent from 'src/views/PasswordResetEmailSent';


describe('PasswordResetEmailSent', () => {
  function createComponent(props = {}) {
    return (
      <PasswordResetEmailSent
        onDismissPress={noop}
        {...props}
      />
    );
  }

  it('should render', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });
});
