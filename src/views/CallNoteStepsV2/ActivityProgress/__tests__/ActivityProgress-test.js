import { noop } from 'lodash';
import React from 'react';

import ActivityProgress from 'src/views/CallNoteStepsV2/ActivityProgress';
import * as constants from 'src/constants/callNotes';
import {
  propEquals, fakeActivity, fakeCallNoteV2, fakeCallNoteMetadata,
} from 'app/scripts/helpers';


describe('ActivityProgress', () => {
  const createComponent = (props = {}) => (
    <ActivityProgress
      callNote={fakeCallNoteV2()}
      activity={fakeActivity()}
      metadata={fakeCallNoteMetadata()}
      onChange={noop}
      onBackPress={noop}
      onNextPress={noop}
      {...props}
    />
  );

  it('should support rendering items for an original activity', () => {
    const el = render(createComponent({
      activity: fakeActivity(),
      metadata: fakeCallNoteMetadata({ activityHasChanged: false }),
    }));

    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should support rendering items for an overridden activity', () => {
    const el = render(createComponent({
      activity: fakeActivity(),
      metadata: fakeCallNoteMetadata({ activityHasChanged: true }),
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

  it('should call onChange() when "completed" is selected', () => {
    const onChange = jest.fn();

    const el = shallow(createComponent({
      activity: fakeActivity({ id: 23 }),
      onChange,
    }));

    el.findWhere(propEquals('value', constants.V2_ACTIVITY_COMPLETED))
      .simulate('select', constants.V2_ACTIVITY_COMPLETED);

    expect(onChange.mock.calls)
      .toEqual([[{
        activityProgress: constants.V2_ACTIVITY_COMPLETED,
        activity: 23,
      }]]);
  });

  it('should call onChange() when " partially completed" is selected', () => {
    const onChange = jest.fn();

    const el = shallow(createComponent({
      activity: fakeActivity({ id: 23 }),
      onChange,
    }));

    el.findWhere(propEquals('value', constants.V2_ACTIVITY_PARTIALLY_COMPLETED))
      .simulate('select', constants.V2_ACTIVITY_PARTIALLY_COMPLETED);

    expect(onChange.mock.calls)
      .toEqual([[{
        activityProgress: constants.V2_ACTIVITY_PARTIALLY_COMPLETED,
        activity: 23,
      }]]);
  });

  it('should call onActivityChangeSelect when "activity used" is selected', () => {
    const onActivityChangeSelect = jest.fn();

    const el = shallow(createComponent({
      activity: void 0,
      onActivityChangeSelect,
    }));

    el.findWhere(propEquals('value', constants.V2_ACTIVITY_USED))
      .simulate('select');

    expect(onActivityChangeSelect.mock.calls)
      .toEqual([[]]);
  });

  it('should call onActivityChangeSelect when "activity different" is selected', () => {
    const onActivityChangeSelect = jest.fn();

    const el = shallow(createComponent({
      onActivityChangeSelect,
    }));

    el.findWhere(propEquals('value', constants.V2_ACTIVITY_DIFFERENT))
      .simulate('select');

    expect(onActivityChangeSelect.mock.calls)
      .toEqual([[]]);
  });
});
