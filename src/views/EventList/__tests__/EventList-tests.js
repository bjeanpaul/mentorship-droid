import { Provider } from 'react-redux';
import React from 'react';
import EventList from 'src/views/EventList';
import { fakeStore, fakeState, fakeEvent, fakeProfile } from 'app/scripts/helpers';


describe('EventList', () => {
  function createComponent(props = {}) {
    return (
      <EventList
        {...props}
      />
    );
  }

  it('should not render unmapped event types', () => {
    const store = fakeStore(state);

    const groups = [{
      date: '2008-08-08',
      label: 'A long time ago',
      events: [
        fakeEvent({
          id: 1,
          occuredAt: '2008-08-08T10:00Z',
          eventType: 'fake-event-type',
        }),
      ],
    }];

    const state = fakeState({
      auth: {
        profileId: 999,
      },
      entities: {
        profiles: {
          999: fakeProfile({
            id: 999,
            firstName: 'Yo yo bangles',
          }),
        },
      },
    });

    expect(render(
      <Provider store={fakeStore}>
        {createComponent({ groups })}
      </Provider>
    ).toJSON()).toMatchSnapshot();
  });
});
