import { noop } from 'lodash';
import React from 'react';

import ForgotPassword from 'src/views/ForgotPassword';


describe('ForgotPassword', () => {
  function createComponent(props = {}) {
    return (
      <ForgotPassword
        onDismissPress={noop}
        {...props}
      />
    );
  }

  it('should render', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });
});
