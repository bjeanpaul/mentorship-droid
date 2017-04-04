import { noop } from 'lodash';
import React from 'react';

import PasswordResetStart from 'src/views/PasswordResetStart';


describe('PasswordResetStart', () => {
  function createComponent(props = {}) {
    return (
      <PasswordResetStart
        onDismissPress={noop}
        {...props}
      />
    );
  }

  it('should render', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });
});
