import { noop } from 'lodash';
import React from 'react';

import CallNoteSaved from 'src/views/CallNoteSaved';
import { fakeActivity, fakeCallNote, uidEquals } from 'app/scripts/helpers';


describe('CallNoteSaved', () => {
  const createComponent = (props = {}) => (
    <CallNoteSaved
      callNote={fakeCallNote()}
      onDismissPress={noop}
      onScheduleAgainPress={noop}
      {...props}
    />
  );

  it('should render', () => {
    const el = render(createComponent());
    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should render with an activity', () => {
    const el = render(createComponent({
      activity: fakeActivity({ title: 'Act III' }),
    }));

    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should call onDismissPress when the dismiss button is pressed', () => {
    const onDismissPress = jest.fn();

    const el = shallow(createComponent({ onDismissPress }));

    el.findWhere(uidEquals('dismiss'))
      .simulate('press');

    expect(onDismissPress.mock.calls).toEqual([[]]);
  });

  it('should call onScheduleAgainPress when the schedule button is pressed', () => {
    const onScheduleAgainPress = jest.fn();
    const callNote = fakeCallNote();

    const el = shallow(createComponent({
      callNote,
      onScheduleAgainPress,
    }));

    el.findWhere(uidEquals('scheduleAgain'))
      .simulate('press');

    expect(onScheduleAgainPress.mock.calls).toEqual([[callNote.callStartTime]]);
  });
});
