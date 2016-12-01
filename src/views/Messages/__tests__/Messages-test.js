import React from 'react';

import Messages from 'src/views/Messages';
import { fakeMessage } from 'app/scripts/helpers';


describe('Messages', () => {
  function createComponent(props = {}) {
    return (
      <Messages
        groups={[{
          messages: [
            fakeMessage({
              type: 'SENT',
              content: 'Sputnik sickles found in the seats',
            }),
            fakeMessage({
              type: 'RECEIVED',
              content: 'I lost my liquid tongue for the wet pen',
            }),
          ],
        }, {
          messages: [
            fakeMessage({
              type: 'SENT',
              content: 'Let a stool pigeon escort those who contort',
            }),
          ],
        }]}
        {...props}
      />
    );
  }

  it('should render', () => {
    const el = render(createComponent());
    expect(el.toJSON()).toMatchSnapshot();
  });
});
