import React from 'react';

import LoginStatusMessage from 'src/views/LoginStatusMessage';
import * as statuses from 'src/statuses/auth';


describe('LoginStatusMessage', () => {
  const createComponent = (props = {}) => (
    <LoginStatusMessage
      type={statuses.authStatusIdle().type}
      {...props}
    />
  );

  it('should draw not found statuses', () => {
    expect(render(createComponent(statuses.authStatusNotFound()))).toMatchSnapshot();
  });

  it('should draw error statuses', () => {
    expect(render(createComponent(statuses.authStatusError()))).toMatchSnapshot();
  });
});
