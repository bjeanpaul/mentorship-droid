import { noop } from 'lodash';
import React from 'react';

import Activity from 'src/activities/Activity';
import { fakeCategory, fakeActivity, uidEquals } from 'app/scripts/helpers';
import { ACTIVITY_POSTER } from 'app/scripts/fixtures';


describe('Activity', () => {
  const createComponent = (props = {}) => (
    <Activity
      category={fakeCategory()}
      activity={fakeActivity({ title: 'Activity 1' })}
      onBackPress={noop}
      onSchedulePress={noop}
      {...props}
    />
  );

  it('should render', () => {
    const el = render(createComponent());
    expect(el).toMatchSnapshot();
  });

  it('should not try display a poster if none is given', () => {
    const el = render(createComponent({ poster: null }));
    expect(el).toMatchSnapshot();
  });

  it('should display the poster if one is given', () => {
    const el = render(createComponent({ poster: ACTIVITY_POSTER }));
    expect(el).toMatchSnapshot();
  });

  it('should call onBackPress when the back button is pressed', () => {
    const onBackPress = jest.fn();
    const el = shallow(createComponent({ onBackPress }));

    el.findWhere(uidEquals('back'))
      .simulate('press');

    expect(onBackPress.mock.calls).toEqual([[]]);
  });

  fit('should call onSchedulePress when the top schedule button is pressed', () => {
    const onSchedulePress = jest.fn();

    shallow(createComponent({ onSchedulePress }))
      .find('Action')
      .shallow()
      .find('ActionButton')
      .shallow()
      .simulate('press');

    expect(onSchedulePress.mock.calls).toEqual([[]]);
  });
});
