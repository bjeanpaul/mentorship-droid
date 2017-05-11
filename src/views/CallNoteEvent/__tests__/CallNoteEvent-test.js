import { noop } from 'lodash';
import React from 'react';

import CallNoteEvent from 'src/views/CallNoteEvent';
import { fakeEvent, fakeCallNote, fakeCallNoteV2 } from 'app/scripts/helpers';
import * as constants from 'src/constants/callNotes';


describe('CallNoteEvent', () => {
  const createComponent = (props = {}) => (
    <CallNoteEvent
      event={fakeEvent()}
      callNote={fakeCallNote()}
      onPress={noop}
      {...props}
    />
  );

  describe('v1', () => {
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
        .find('CallNoteEventV1')
        .shallow()
        .find('Event')
        .props();

      expect(props).toEqual(jasmine.objectContaining({
        date: '2016-09-16T11:19:17.368442Z',
        title: 'Wrote Call Notes',
        blurb: 'noitcefler',
        icon: constants.EVENT_MOOD_IMAGES[constants.CALL_NOTES_MENTEE_HAPPY],
      }));
    });

    it('should call onPress with the call note id', () => {
      const onPress = jest.fn();

      shallow(createComponent({
        event: fakeEvent(),
        callNote: fakeCallNote({ id: 23 }),
        onPress,
      }))
        .find('CallNoteEventV1')
        .shallow()
        .props()
        .onPress();

      expect(onPress.mock.calls).toEqual([[23]]);
    });
  });

  describe('v2', () => {
    it('should render an event with the correct props', () => {
      const props = shallow(createComponent({
        event: fakeEvent({
          occuredAt: '2016-09-16T11:19:17.368442Z',
        }),
        callNote: fakeCallNoteV2({
          mood: constants.V2_MOOD_HAPPY,
          reflection: 'noitcefler',
        }),
      }))
        .find('CallNoteEventV2')
        .shallow()
        .find('Event')
        .props();

      expect(props).toEqual(jasmine.objectContaining({
        date: '2016-09-16T11:19:17.368442Z',
        title: 'Wrote Call Notes',
        blurb: 'noitcefler',
        icon: constants.V2_EVENT_MOOD_IMAGES[constants.V2_MOOD_HAPPY],
      }));
    });

    it('should call onPress with the call note id', () => {
      const onPress = jest.fn();

      shallow(createComponent({
        event: fakeEvent(),
        callNote: fakeCallNoteV2({ id: 23 }),
        onPress,
      }))
        .find('CallNoteEventV2')
        .shallow()
        .props()
        .onPress();

      expect(onPress.mock.calls).toEqual([[23]]);
    });
  });
});
