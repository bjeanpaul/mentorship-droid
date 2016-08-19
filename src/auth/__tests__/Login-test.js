import React from 'react';
import { noop } from 'lodash';

import Login from 'src/auth/Login';
import { authStatusNotFound } from 'src/auth/statuses';


describe('auth/Login', () => {
  it('should draw not found statuses', () => {
    expect(
      <Login
        status={authStatusNotFound()}
        onLoginPress={noop}
      />
    ).toMatchSnapshot();
  });
});
