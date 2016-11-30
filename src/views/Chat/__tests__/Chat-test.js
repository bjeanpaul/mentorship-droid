import React from 'react';

import Chat from 'src/views/Chat';


describe('Chat', () => {
  function createComponent(props = {}) {
    return (
      <Chat
        {...props}
      />
    );
  }

  it('should render', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });
});
