import { noop } from 'lodash';
import React from 'react';

import Activity from 'src/activities/Activity';
import { fakeCategory, fakeActivity, uidEquals } from 'app/scripts/helpers';


describe('Activity', () => {
  const createComponent = (props = {}) => (
    <Activity
      category={fakeCategory()}
      activity={fakeActivity({ title: 'Activity 1' })}
      onBackPress={noop}
      {...props}
    />
  );

  it('should render', () => {
    const el = render(createComponent());
    expect(el).toMatchSnapshot();
  });

  it('should call onBackPress when the back button is pressed', () => {
    const onBackPress = jest.fn();
    const el = shallow(createComponent({ onBackPress }));

    el.findWhere(uidEquals('back'))
      .simulate('press');

    expect(onBackPress.mock.calls).toEqual([[]]);
  });
});
