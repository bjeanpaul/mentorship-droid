import { noop } from 'lodash';
import React from 'react';

import PasswordReset from 'src/views/PasswordReset';


describe('PasswordReset', () => {
  function createComponent(props = {}) {
    return (
      <PasswordReset
        onDismissPress={noop}
        {...props}
      />
    );
  }

  it('should render', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });
});
