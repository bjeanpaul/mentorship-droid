import { noop } from 'lodash';
import React from 'react';

import PasswordResetContinue from 'src/views/PasswordResetContinue';


describe('PasswordResetContinue', () => {
  function createComponent(props = {}) {
    return (
      <PasswordResetContinue
        onDismissPress={noop}
        {...props}
      />
    );
  }

  it('should render', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });
});
