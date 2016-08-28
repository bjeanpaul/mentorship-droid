import React from 'react';
import Activity from 'src/activities/Activity';
import { fakeCategory, fakeActivity } from 'app/scripts/helpers';


describe('Activity', () => {
  const createComponent = (props = {}) => (
    <Activity
      category={fakeCategory()}
      activity={fakeActivity({ title: 'Activity 1' })}
      {...props}
    />
  );

  it('should render', () => {
    const el = render(createComponent());
    expect(el).toMatchSnapshot();
  });
});
