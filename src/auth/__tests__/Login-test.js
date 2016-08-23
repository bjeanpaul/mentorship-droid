import React from 'react';
import { noop } from 'lodash';

import Login from 'src/auth/Login';
import * as statuses from 'src/auth/statuses';


describe('auth/Login', () => {
  it('should draw not found statuses', () => {
    expect(render(
      <Login
        status={statuses.authStatusNotFound()}
        onLoginPress={noop}
      />
    )).toMatchSnapshot();
  });

  it('should draw error statuses', () => {
    expect(render(
      <Login
        status={statuses.authStatusError()}
        onLoginPress={noop}
      />
    )).toMatchSnapshot();
  });
});
