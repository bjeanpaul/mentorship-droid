import { Provider } from 'react-redux';
import React from 'react';
import EventList from 'src/views/EventList';
import { fakeStore, fakeState, fakeEvent } from 'app/scripts/helpers';


describe('EventList', () => {
  function createComponent(props = {}, state = fakeState()) {
    return (
      <Provider store={fakeStore(state)}>
        <EventList
          events={[fakeEvent()]}
          {...props}
        />
      </Provider>
    );
  }

  it('should render', () => {
    const el = render(createComponent());
    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should exclude events with no corresponding component for their type', () => {
    const el = shallow(createComponent({
      events: [
        fakeEvent(),
        fakeEvent({ eventType: 'UNKNOWN' }),
      ],
    }));

    const events = el.find('EventList')
      .shallow()
      .find('EventGroup')
      .shallow()
      .find('Event');

    expect(events.length).toEqual(1);
  });
});
