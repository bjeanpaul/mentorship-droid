import React from 'react';

import images from 'src/constants/images';
import ScheduledCallEvent from 'src/views/ScheduledCallEvent';
import { fakeScheduledCall, fakeActivity } from 'app/scripts/helpers';
import { imageUrl } from 'src/api';


describe('ScheduledCallEvent', () => {
  const createComponent = (props = {}) => (
    <ScheduledCallEvent
      scheduledCall={fakeScheduledCall()}
      {...props}
    />
  );

  it('should render', () => {
    const el = render(createComponent());
    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should display an activity icon if an activity with an icon is given', () => {
    let el;

    el = shallow(createComponent({
      activity: void 0,
    }));

    expect(el.find('Event').prop('icon'))
      .toEqual(images.JOURNEY_EVENT_SCHEDULED_CALL_ICON);

    el = shallow(createComponent({
      activity: fakeActivity({ icon: imageUrl(null) }),
    }));

    expect(el.find('Event').prop('icon'))
      .toEqual(images.JOURNEY_EVENT_SCHEDULED_CALL_ICON);

    el = shallow(createComponent({
      activity: fakeActivity({
        icon: imageUrl('http://placehold.it/56x56'),
      }),
    }));

    expect(el.find('Event').prop('icon'))
      .toEqual(imageUrl('http://placehold.it/56x56').toSource());
  });
});
