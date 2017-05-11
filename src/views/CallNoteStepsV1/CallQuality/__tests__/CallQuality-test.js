import { noop } from 'lodash';
import React from 'react';

import { uidEquals, fakeCallNote } from 'app/scripts/helpers';
import { CallQuality } from 'src/views/CallNoteStepsV1';
import * as constants from 'src/constants/callNotes';


describe('CallQuality', () => {
  const createComponent = (props = {}) => (
    <CallQuality
      callNote={fakeCallNote({ callQuality: 'excellent' })}
      onChange={noop}
      onBackPress={noop}
      onDonePress={noop}
      {...props}
    />
  );

  it('should render', () => {
    const el = render(createComponent());
    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should call onChange() when the rating changes', () => {
    const onChange = jest.fn();

    const el = shallow(createComponent({
      onChange,
    }));

    el.findWhere(uidEquals('callQualities'))
      .simulate('indexChanged', { index: 0 });

    expect(onChange.mock.calls)
      .toEqual([[{ callQuality: constants.CALL_QUALITY_EXCELLENT }]]);
  });

  it('should call onBackPress() when back is pressed', () => {
    const onBackPress = jest.fn();

    const el = shallow(createComponent({
      onBackPress,
    }));

    el.find('FormStep')
      .simulate('backPress');

    expect(onBackPress.mock.calls)
      .toEqual([[]]);
  });

  it('should call onDonePress() when done is pressed', () => {
    const onDonePress = jest.fn();

    const callNote = fakeCallNote();

    const el = shallow(createComponent({
      callNote,
      onDonePress,
    }));

    el.find('FormStep')
      .simulate('donePress');

    expect(onDonePress.mock.calls)
      .toEqual([[callNote]]);
  });
});
