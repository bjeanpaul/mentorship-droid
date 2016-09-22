import moment from 'moment';
import { noop } from 'lodash';
import React from 'react';

import ScheduleListCalendar from 'src/views/ScheduleListCalendar';


describe('ScheduleListCalendar', () => {
  const createComponent = (props = {}) => (
    <ScheduleListCalendar
      dates={[
        moment(0).toISOString(),
        moment(1).toISOString(),
        moment(2).toISOString(),
      ]}
      onDateSelect={noop}
      {...props}
    />
  );

  it('should render', () => {
    expect(render(createComponent()).toJSON()).toMatchSnapshot();
  });
});
