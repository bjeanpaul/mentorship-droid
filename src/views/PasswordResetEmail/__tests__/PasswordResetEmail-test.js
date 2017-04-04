import { noop } from 'lodash';
import React from 'react';

import PasswordResetEmail from 'src/views/PasswordResetEmail';


describe('PasswordResetEmail', () => {
  function createComponent(props = {}) {
    return (
      <PasswordResetEmail
        onDismissPress={noop}
        {...props}
      />
    );
  }

  it('should render', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });
});
