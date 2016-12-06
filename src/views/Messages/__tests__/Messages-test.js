import { noop } from 'lodash';
import React from 'react';

import Messages from 'src/views/Messages';
import * as constants from 'src/constants/messages';
import { fakeMessage, uidEquals } from 'app/scripts/helpers';


describe('Messages', () => {
  function createComponent(props = {}) {
    return (
      <Messages
        groups={[{
          messages: [
            fakeMessage({
              direction: constants.MESSAGE_DIRECTION_OUTBOUND,
              content: 'Sputnik sickles found in the seats',
            }),
            fakeMessage({
              direction: constants.MESSAGE_DIRECTION_INBOUND,
              content: 'I lost my liquid tongue for the wet pen',
            }),
          ],
        }, {
          messages: [
            fakeMessage({
              direction: constants.MESSAGE_DIRECTION_OUTBOUND,
              content: 'Let a stool pigeon escort those who contort',
            }),
          ],
        }]}
        onSendPress={noop}
        {...props}
      />
    );
  }

  it('should render', () => {
    const el = render(createComponent());
    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should call onSendPress() with input content when pressed', () => {
    const onSendPress = jest.fn();
    const el = shallow(createComponent({ onSendPress }));

    const send = el.find('Send')
      .shallow();

    send.findWhere(uidEquals('sendInput'))
      .simulate('textChange', '123');

    send.findWhere(uidEquals('sendButton'))
      .simulate('press');

    expect(onSendPress.mock.calls).toEqual([[{ content: '123' }]]);
  });
});
