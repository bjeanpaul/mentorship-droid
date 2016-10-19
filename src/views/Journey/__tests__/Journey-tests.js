import React from 'react';
import Journey from '../index';
import { noop } from 'lodash';
import { fakeState, fakeStore, fakeScheduledCall, uidEquals } from 'app/scripts/helpers';
import { Provider } from 'react-redux';

describe('Journey', () => {
  const provide = component => {
    const state = fakeState();
    const store = fakeStore();

    state.entities.events = [];
    store.getState = () => state;

    return <Provider store={store}>{component}</Provider>;
  };

  const createComponent = (props = {}) => (
    <Journey
      shouldStartCall={false}
      onScheduleCallPress={noop}
      onViewScheduledCallPress={noop}
      onStartScheduledCallPress={noop}
      onCallPress={noop}
      onMessagePress={noop}
      onGetStartedPress={noop}
      onProfilePress={noop}
      {...props}
    />
  );

  it('should render', () => {
    const el = render(provide(createComponent()));
    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should render the next scheduled call', () => {
    const el = render(provide(createComponent({
      scheduledCall: fakeScheduledCall(),
      shouldStartCall: false,
    })));

    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should render the current scheduled call to be started', () => {
    const el = render(provide(createComponent({
      scheduledCall: fakeScheduledCall(),
      shouldStartCall: true,
    })));

    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should call onCallPress when the call button is pressed', () => {
    const onCallPress = jest.fn();
    const el = shallow(createComponent({ onCallPress }));
    el.findWhere(uidEquals('call')).simulate('press');
    expect(onCallPress.mock.calls).toEqual([[]]);
  });

  it('should call onProfilePress when the profile icon is pressed', () => {
    const onProfilePress = jest.fn();

    shallow(createComponent({ onProfilePress }))
      .findWhere(uidEquals('profile'))
      .simulate('press');

    expect(onProfilePress.mock.calls).toEqual([[]]);
  });

  it('should call onScheduleCallPress when the header is pressed', () => {
    const onScheduleCallPress = jest.fn();

    const el = shallow(createComponent({
      onScheduleCallPress,
      scheduledCall: void 0,
    }));

    el.findWhere(uidEquals('headerContent'))
      .shallow()
      .simulate('press');

    expect(onScheduleCallPress.mock.calls).toEqual([[]]);
  });

  it('should call onViewScheduledCallPress when the header is pressed', () => {
    const onViewScheduledCallPress = jest.fn();

    const el = shallow(createComponent({
      onViewScheduledCallPress,
      shouldStartCall: false,
      scheduledCall: fakeScheduledCall({ id: 23 }),
    }));

    el.findWhere(uidEquals('headerContent'))
      .shallow()
      .simulate('press');

    expect(onViewScheduledCallPress.mock.calls).toEqual([[23]]);
  });

  it('should call onStartScheduledCallPress when the header is pressed', () => {
    const onStartScheduledCallPress = jest.fn();

    const el = shallow(createComponent({
      onStartScheduledCallPress,
      shouldStartCall: true,
      scheduledCall: fakeScheduledCall({ id: 23 }),
    }));

    el.findWhere(uidEquals('headerContent'))
      .shallow()
      .simulate('press');

    expect(onStartScheduledCallPress.mock.calls).toEqual([[23]]);
  });
});
