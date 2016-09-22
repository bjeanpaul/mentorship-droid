import React from 'react';

import { fakeScheduledCall, fakeActivity } from 'app/scripts/helpers';
import ScheduleList from 'src/views/ScheduleList';


describe('ScheduleList', () => {
  const createComponent = (props = {}) => (
    <ScheduleList
      scheduledCalls={[
        fakeScheduledCall({
          callTime: '2016-09-20:40:09.880Z',
          activity: null,
        }),
        fakeScheduledCall({
          callTime: '2016-09-22T19:40:09.880Z',
          activity: fakeActivity(),
        }),
      ]}
      {...props}
    />
  );

  it('should render', () => {
    expect(render(createComponent()).toJSON()).toMatchSnapshot();
  });

  it('should render the selected call time', () => {
    const el = render(createComponent({
      initialSelectedDate: '2016-09-22T19:40:09.880Z',
      scheduledCalls: [
        fakeScheduledCall({
          callTime: '2016-09-22T19:40:09.880Z',
          activity: null,
        }),
      ],
    }));

    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should render the selected call activity title', () => {
    const el = render(createComponent({
      initialSelectedDate: '2016-09-22T19:40:09.880Z',
      scheduledCalls: [
        fakeScheduledCall({
          callTime: '2016-09-22T19:40:09.880Z',
          activity: fakeActivity(),
        }),
      ],
    }));

    expect(el.toJSON()).toMatchSnapshot();
  });
});
