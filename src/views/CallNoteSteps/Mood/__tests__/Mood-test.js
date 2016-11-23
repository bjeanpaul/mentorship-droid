import { noop } from 'lodash';
import React from 'react';

import { uidEquals, fakeCallNote } from 'app/scripts/helpers';
import { CALL_NOTES_MENTEE_HAPPY } from 'src/constants/callNote';
import { Mood } from 'src/views/CallNoteSteps';


describe('Mood', () => {
  const createComponent = (props = {}) => (
    <Mood
      callNote={fakeCallNote({ menteeState: 'Sad' })}
      onChange={noop}
      onBackPress={noop}
      onNextPress={noop}
      {...props}
    />
  );

  it('should render', () => {
    const el = render(createComponent());
    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should call onChange() when a state is pressed', () => {
    const onChange = jest.fn();

    const el = shallow(createComponent({
      onChange,
    }));

    el.findWhere(uidEquals(CALL_NOTES_MENTEE_HAPPY))
      .simulate('press');

    expect(onChange.mock.calls)
      .toEqual([[{ menteeState: CALL_NOTES_MENTEE_HAPPY }]]);
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

  it('should call onNextPress() when back is pressed', () => {
    const onNextPress = jest.fn();

    const el = shallow(createComponent({
      onNextPress,
    }));

    el.find('FormStep')
      .simulate('nextPress');

    expect(onNextPress.mock.calls)
      .toEqual([[]]);
  });
});
