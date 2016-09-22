import React from 'react';

import { fakeActivity } from 'app/scripts/helpers';
import ScheduleList from 'src/views/ScheduleList';


describe('ScheduleList', () => {
  const createComponent = (props = {}) => (
    <ScheduleList
      calls={[]}
      activity={fakeActivity()}
      {...props}
    />
  );

  it('should render', () => {
    expect(render(createComponent()).toJSON()).toMatchSnapshot();
  });
});
