import React from 'react';

import Messages from 'src/views/Messages';


describe('Messages', () => {
  function createComponent(props = {}) {
    return (
      <Messages
        {...props}
      />
    );
  }

  it('should render', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });
});
