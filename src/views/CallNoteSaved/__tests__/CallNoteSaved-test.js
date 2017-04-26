import { noop } from 'lodash';
import React from 'react';

import CallNoteSaved from 'src/views/CallNoteSaved';
import { fakeActivity, fakeCallNote, fakeCallNoteMetadata, uidEquals } from 'app/scripts/helpers';


describe('CallNoteSaved', () => {
  const createComponent = (props = {}) => (
    <CallNoteSaved
      callNote={fakeCallNote()}
      onDismissPress={noop}
      onScheduleNextPress={noop}
      metadata={fakeCallNoteMetadata()}
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

  it('should call onScheduleNextPress when the schedule button is pressed', () => {
    const onScheduleNextPress = jest.fn();
    const callNote = fakeCallNote();

    const el = shallow(createComponent({
      callNote,
      onScheduleNextPress,
    }));

    el.findWhere(uidEquals('scheduleNext'))
      .simulate('press');

    expect(onScheduleNextPress.mock.calls).toEqual([[callNote.callStartTime]]);
  });
});
