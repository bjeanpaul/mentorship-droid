import React from 'react';
import Journey from '../index';
import { noop } from 'lodash';
import { fakeState, fakeStore } from 'app/scripts/helpers';
import { Provider } from 'react-redux';

describe('Journey', () => {
  function createComponent(props = {}) {
    return (
      <Journey
        nextScheduledCallDate="2016-10-15 17:07"
        onNextScheduledCallPress={noop}
        onCallPress={noop}
        onMessagePress={noop}
        onGetStartedPress={noop}
        {...props}
      />
    );
  }

  it('should map props correctly', () => {

    const state = fakeState({
      entities: { events: [] },
    });
    const store = fakeStore;
    store.getState = () => state;


    expect(render(
      <Provider store={fakeStore}>
        {createComponent()}
      </Provider>
    ).toJSON()).toMatchSnapshot();
  });

  it('should be able to tap and fire `onPressNextScheduledCall`', () => {
    const onNextScheduledCallPress = jest.fn();
    const el = shallow(createComponent({ onNextScheduledCallPress }));
    el.find('Link').simulate('press');
    expect(onNextScheduledCallPress).toBeCalled();
  });

  it('should be able to tap and fire `onCallPress`', () => {
    const onCallPress = jest.fn();
    const el = shallow(createComponent({ onCallPress }));
    el.find('TouchableWithoutFeedback').at(0).simulate('press');
    expect(onCallPress).toBeCalled();
  });

  it('should be able to tap and fire `onMessagePress`', () => {
    const onMessagePress = jest.fn();
    const el = shallow(createComponent({ onMessagePress }));
    el.find('TouchableWithoutFeedback').at(1).simulate('press');
    expect(onMessagePress).toBeCalled();
  });

  it('should be able to tap and fire `onPressNextScheduledCall`', () => {
    const onNextScheduledCallPress = jest.fn();
    const el = shallow(createComponent({ onNextScheduledCallPress }));
    el.find('Link').simulate('press');
    expect(onNextScheduledCallPress).toBeCalled();
  });
});
