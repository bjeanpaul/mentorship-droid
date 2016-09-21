import React from 'react';
import EventList from 'src/views/EventList';
import { fakeEvent } from 'app/scripts/helpers';


describe('EventList', () => {
  function createComponent(props = {}) {
    return (
      <EventList
        {...props}
      />
    );
  }

  it('should not render unmapped event types', () => {
    expect(
      render(
        createComponent({
          groups: [{
            date: '2008-08-08',
            label: 'A long time ago',
            events: [
              fakeEvent({
                id: 1,
                occuredAt: '2008-08-08T10:00Z',
                eventType: 'fake-event-type',
              }),
            ]
          }],
        }))
        .toJSON()).toMatchSnapshot();
  });
});
