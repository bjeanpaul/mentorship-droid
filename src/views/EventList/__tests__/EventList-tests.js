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
});
