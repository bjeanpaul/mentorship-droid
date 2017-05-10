import { noop } from 'lodash';
import React from 'react';

import CallNoteEvent from 'src/views/CallNoteEvent';
import { fakeEvent, fakeCallNote } from 'app/scripts/helpers';
import * as constants from 'src/constants/callNotes';
import { EVENT_MOOD_IMAGES } from 'src/constants/callNotes';


describe('CallNoteEvent', () => {
  const createComponent = (props = {}) => (
    <CallNoteEvent
      event={fakeEvent()}
      callNote={fakeCallNote()}
      onPress={noop}
      {...props}
    />
  );

  it('should render an event with the correct props', () => {
    const props = shallow(createComponent({
      event: fakeEvent({
        occuredAt: '2016-09-16T11:19:17.368442Z',
      }),
      callNote: fakeCallNote({
        menteeState: constants.CALL_NOTES_MENTEE_HAPPY,
        reflection: 'noitcefler',
      }),
    }))
      .find('Event')
      .props();

    expect(props).toEqual(jasmine.objectContaining({
      date: '2016-09-16T11:19:17.368442Z',
      title: 'Wrote Call Notes',
      blurb: 'noitcefler',
      icon: EVENT_MOOD_IMAGES[constants.CALL_NOTES_MENTEE_HAPPY],
    }));
  });

  it('should call onPress with the call note id', () => {
    const onPress = jest.fn();

    shallow(createComponent({
      event: fakeEvent(),
      callNote: fakeCallNote({ id: 23 }),
      onPress,
    }))
      .props()
      .onPress();

    expect(onPress.mock.calls).toEqual([[23]]);
  });
});
