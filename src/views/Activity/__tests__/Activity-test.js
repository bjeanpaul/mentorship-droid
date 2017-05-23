import { noop } from 'lodash';
import React from 'react';

import { imageUrl } from 'src/api';
import Activity from 'src/views/Activity';

import {
  fakeCallNote,
  fakeCategory,
  fakeActivity,
  fakeScheduledCall,
  uidEquals,
} from 'app/scripts/helpers';


describe('Activity', () => {
  const createComponent = (props = {}) => (
    <Activity
      category={fakeCategory()}
      activity={fakeActivity({ title: 'Activity 1' })}
      onBackPress={noop}
      onSchedulePress={noop}
      onReschedulePress={noop}
      onViewCallNotesPress={noop}
      {...props}
    />
  );

  it('should render', () => {
    const el = render(createComponent());
    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should not try display a poster if none is given', () => {
    const el = render(createComponent({ poster: imageUrl(null) }));
    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should display the poster if one is given', () => {
    const el = render(createComponent({ poster: imageUrl('/foo.jpg') }));
    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should display the relevant context for the latest call note', () => {
    const el = render(createComponent({ latestCallNote: fakeCallNote() }));
    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should display the relevant context for the next scheduled call', () => {
    const el = render(createComponent({ nextScheduledCall: fakeScheduledCall() }));
    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should call onBackPress when the back button is pressed', () => {
    const onBackPress = jest.fn();
    const el = shallow(createComponent({ onBackPress }));

    el.findWhere(uidEquals('back'))
      .simulate('press');

    expect(onBackPress.mock.calls).toEqual([[]]);
  });

  it('should call onSchedulePress when the top schedule button is pressed', () => {
    const onSchedulePress = jest.fn();

    const el = shallow(createComponent({
      id: 23,
      onSchedulePress,
    }));

    el.findWhere(uidEquals('topAction'))
      .shallow()
      .find('ActionButton')
      .simulate('press');

    expect(onSchedulePress).toBeCalled();
  });

  it('should call onSchedulePress when the bottom schedule button is pressed', () => {
    const onSchedulePress = jest.fn();

    const el = shallow(createComponent({
      id: 23,
      onSchedulePress,
    }));

    el.findWhere(uidEquals('bottomAction'))
      .shallow()
      .find('ActionButton')
      .simulate('press');

    expect(onSchedulePress).toBeCalled();
  });

  it('should call onReschedulePress when the top schedule button is pressed', () => {
    const onReschedulePress = jest.fn();

    const el = shallow(createComponent({
      id: 23,
      nextScheduledCall: fakeScheduledCall(),
      onReschedulePress,
    }));

    el.findWhere(uidEquals('topAction'))
      .shallow()
      .find('ActionButton')
      .simulate('press');

    expect(onReschedulePress).toBeCalled();
  });

  it('should call onReschedulePress when the bottom schedule button is pressed', () => {
    const onReschedulePress = jest.fn();

    const el = shallow(createComponent({
      id: 23,
      nextScheduledCall: fakeScheduledCall(),
      onReschedulePress,
    }));

    el.findWhere(uidEquals('bottomAction'))
      .shallow()
      .find('ActionButton')
      .simulate('press');

    expect(onReschedulePress).toBeCalled();
  });

  it('should call onViewCallNotesPress when the top schedule button is pressed', () => {
    const onViewCallNotesPress = jest.fn();

    const el = shallow(createComponent({
      id: 23,
      latestCallNote: fakeCallNote(),
      onViewCallNotesPress,
    }));

    el.findWhere(uidEquals('topAction'))
      .shallow()
      .find('ActionButton')
      .simulate('press');

    expect(onViewCallNotesPress).toBeCalled();
  });

  it('should call onViewCallNotesPress when the bottom schedule button is pressed', () => {
    const onViewCallNotesPress = jest.fn();

    const el = shallow(createComponent({
      id: 23,
      latestCallNote: fakeCallNote(),
      onViewCallNotesPress,
    }));

    el.findWhere(uidEquals('bottomAction'))
      .shallow()
      .find('ActionButton')
      .simulate('press');

    expect(onViewCallNotesPress).toBeCalled();
  });
});
