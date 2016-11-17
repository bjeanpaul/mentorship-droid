import { noop } from 'lodash';
import React from 'react';

import {
  uidEquals,
  fakeCallNote,
  fakeActivity,
  fakeCategory,
} from 'app/scripts/helpers';

import { Completed } from 'src/views/CallNoteSteps';


describe('Completed', () => {
  const createComponent = (props = {}) => (
    <Completed
      callNote={fakeCallNote({ objectiveAchieved: void 0 })}
      activity={fakeActivity({ objective: 'None' })}
      category={fakeCategory({ color: 'pink' })}
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

  it('should call onChange() when the objective achieved choice changes', () => {
    const onChange = jest.fn();

    const el = shallow(createComponent({
      onChange,
    }));

    el.findWhere(uidEquals('objectiveAchieved'))
      .simulate('press');

    expect(onChange.mock.calls)
      .toEqual([[{ objectiveAchieved: true }]]);

    el.findWhere(uidEquals('objectiveNotAchieved'))
      .simulate('press');

    expect(onChange.mock.calls)
      .toEqual([
        [{ objectiveAchieved: true }],
        [{ objectiveAchieved: false }],
      ]);
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
