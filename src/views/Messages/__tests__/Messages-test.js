import { noop } from 'lodash';
import React from 'react';

import Messages from 'src/views/Messages';
import * as constants from 'src/constants/messages';

import {
  fakeMessage,
  fakeProfile,
  fakePendingMessage,
  uidEquals,
} from 'app/scripts/helpers';


const createComponent = (props = {}) => (
  <Messages
    profile={fakeProfile()}
    messages={[
      fakeMessage({
        id: 1,
        content: 'Sputnik sickles found in the seats',
        details: { direction: constants.MESSAGE_DIRECTION_OUTBOUND },
      }),
      fakeMessage({
        id: 2,
        content: 'I lost my liquid tongue for the wet pen',
        details: { direction: constants.MESSAGE_DIRECTION_INBOUND },
      }),
      fakeMessage({
        id: 3,
        content: 'Let a stool pigeon escort those who contort',
        details: { direction: constants.MESSAGE_DIRECTION_OUTBOUND },
      })]}
    onSendPress={noop}
    onRetryPress={noop}
    {...props}
  />
);


describe('Messages', () => {
  it('should render', () => {
    const el = render(createComponent());
    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should render inbound messages', () => {
    const el = render(createComponent({
      messages: [fakeMessage({
        details: { direction: constants.MESSAGE_DIRECTION_INBOUND },
      })],
    }));

    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should render outbound messages', () => {
    const el = render(createComponent({
      groups: [fakeMessage({
        details: { direction: constants.MESSAGE_DIRECTION_OUTBOUND },
      })],
    }));

    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should render sending messages', () => {
    const el = render(createComponent({
      groups: [fakePendingMessage({
        details: { status: constants.PENDING_MESSAGE_STATUS_SENDING },
      })],
    }));

    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should render failed messages', () => {
    const el = render(createComponent({
      groups: [fakePendingMessage({
        details: { status: constants.PENDING_MESSAGE_STATUS_FAILED },
      })],
    }));

    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should render outbound system messages', () => {
    const el = render(createComponent({
      groups: [fakePendingMessage({
        details: { messageType: constants.COMPLETE_MESSAGE_TYPE_SYSTEM },
      })],
    }));

    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should render the send button as disabled when there is no content', () => {
    let el;
    el = render(createComponent({ initialContent: '' }));
    expect(el.toJSON()).toMatchSnapshot();

    el = render(createComponent({ initialContent: 'foo' }));
    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should call onSendPress() with input content when pressed', () => {
    const onSendPress = jest.fn();
    const el = shallow(createComponent({ onSendPress }));

    const send = el.find('Send')
      .shallow();

    send.findWhere(uidEquals('sendInput'))
      .simulate('changeText', '123');

    send.findWhere(uidEquals('sendButton'))
      .simulate('press');

    expect(onSendPress.mock.calls).toEqual([[{ content: '123' }]]);
  });

  it('should not call onSendPress() if there is no content', () => {
    const onSendPress = jest.fn();
    const el = shallow(createComponent({ onSendPress }));

    el.find('Send')
      .shallow()
      .findWhere(uidEquals('sendButton'))
      .simulate('press');

    expect(onSendPress.mock.calls).toEqual([]);
  });

  it('should call onRetryPress() with the relevant message retry when pressed', () => {
    const onRetryPress = jest.fn();

    const msg = fakePendingMessage({
      details: { status: constants.PENDING_MESSAGE_STATUS_FAILED },
    });

    const el = shallow(createComponent({
      onRetryPress,
      messages: [msg],
    }));

    const messageEl = el
      .find('MessageGroup')
      .shallow()
      .find('Message')
      .shallow();

    messageEl.findWhere(uidEquals('retry'))
      .simulate('press');

    expect(onRetryPress.mock.calls).toEqual([[msg]]);
  });
});
