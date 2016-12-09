import { noop } from 'lodash';
import React from 'react';

import MessageEvent from 'src/views/MessageEvent';
import { fakeEvent, fakeMessage } from 'app/scripts/helpers';
import images from 'src/constants/images';


describe('MessageEvent', () => {
  const createComponent = (props = {}) => (
    <MessageEvent
      events={[fakeEvent()]}
      lastMessage={fakeMessage()}
      onPress={noop}
      {...props}
    />
  );

  it('should render an event with the correct props', () => {
    const onPress = jest.fn();

    const props = shallow(createComponent({
      events: [
        fakeEvent({ occuredAt: '2016-09-16T11:19:17.368442Z' }),
        fakeEvent(),
      ],
      latestMessage: fakeMessage({
        content: 'The legend of the rent is way hardcore',
      }),
      onPress,
    }))
      .find('Event')
      .props();

    expect(props).toEqual(jasmine.objectContaining({
      date: '2016-09-16T11:19:17.368442Z',
      title: 'New messages',
      blurb: '“The legend of the rent is way hardcore”',
      icon: images.JOURNEY_EVENT_MESSAGE_ICON,
      count: 2,
      onPress,
    }));
  });
});
