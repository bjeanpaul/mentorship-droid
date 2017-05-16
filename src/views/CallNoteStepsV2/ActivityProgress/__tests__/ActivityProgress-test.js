import { noop } from 'lodash';
import React from 'react';

import ActivityProgress from 'src/views/CallNoteStepsV2/ActivityProgress';
import * as constants from 'src/constants/callNotes';
import { uidEquals, fakeActivity, fakeCallNoteV2 } from 'app/scripts/helpers';


describe('ActivityProgress', () => {
  const createComponent = (props = {}) => (
    <ActivityProgress
      callNote={fakeCallNoteV2()}
      activity={fakeActivity()}
      onChange={noop}
      onBackPress={noop}
      onNextPress={noop}
      {...props}
    />
  );

  it('should support rendering items for an original activity', () => {
    const el = render(createComponent({
      activity: fakeActivity(),
      callNote: fakeCallNoteV2({
        activity: void 0,
      }),
    }));

    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should support rendering items for an overridden activity', () => {
    const el = render(createComponent({
      activity: fakeActivity(),
      callNote: fakeCallNoteV2({ activity: 23 }),
    }));

    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should support rendering items for no activity', () => {
    const el = render(createComponent({ activity: void 0 }));
    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should disable the next button if no selection is given', () => {
    let el;

    el = shallow(createComponent({
      callNote: fakeCallNoteV2({
        activityProgress: void 0,
      }),
    }));

    expect(el.find('FormStep').prop('paginationDisabled')).toBe(true);

    el = shallow(createComponent({
      callNote: fakeCallNoteV2({
        activityProgress: constants.V2_ACTIVITY_COMPLETED,
      }),
    }));

    expect(el.find('FormStep').prop('paginationDisabled')).toBe(false);
  });

  it('should call onChange() when the selection changes', () => {
    const onChange = jest.fn();

    const el = shallow(createComponent({
      onChange,
    }));

    el.findWhere(uidEquals('activityProgressItems'))
      .simulate('select', constants.V2_ACTIVITY_PARTIALLY_COMPLETED);

    expect(onChange.mock.calls)
      .toEqual([[{
        activityProgress: constants.V2_ACTIVITY_PARTIALLY_COMPLETED,
      }]]);
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

  it('should call onNextPress() when next is pressed', () => {
    const onNextPress = jest.fn();

    const el = shallow(createComponent({ onNextPress }));

    el.find('FormStep')
      .simulate('nextPress');

    expect(onNextPress.mock.calls)
      .toEqual([[]]);
  });

  it('should call onDifferentActivitySelect when the relevant option is selected', () => {
    const onDifferentActivitySelect = jest.fn();

    const el = shallow(createComponent({
      onDifferentActivitySelect,
    }));

    el.findWhere(uidEquals('differentActivityItem'))
      .simulate('select');

    expect(onDifferentActivitySelect.mock.calls)
      .toEqual([[]]);
  });
});
