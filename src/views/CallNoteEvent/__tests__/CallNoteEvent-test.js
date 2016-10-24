import React from 'react';
import CallNoteEvent from 'src/views/CallNoteEvent';
import { fakeEvent, fakeCallNote } from 'app/scripts/helpers';
import * as constants from 'src/constants/callNote';
import moodImages from 'src/constants/callNoteMoods';


describe('CallNoteEvent', () => {
  const createComponent = (props = {}) => (
    <CallNoteEvent
      event={fakeEvent()}
      callNote={fakeCallNote()}
      {...props}
    />
  );

  it('should render an event with the correct props', () => {
    const props = shallow(createComponent({
      event: fakeEvent({
        date: '2016-09-16T11:19:17.368442Z',
      }),
      callNote: fakeCallNote({
        menteeState: constants.CALL_NOTES_MENTEE_HAPPY,
        reflection: 'noitcefler',
      }),
    }))
      .find('Event')
      .props();

    expect(props).toEqual({
      date: '2016-09-16T11:19:17.368442Z',
      title: 'Call completed',
      blurb: 'noitcefler',
      icon: moodImages[constants.CALL_NOTES_MENTEE_HAPPY],
    });
  });
});
