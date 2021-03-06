import { noop } from 'lodash';
import React from 'react';

import { fakeScheduledCall, fakeActivity, uidEquals } from 'app/scripts/helpers';
import ScheduleList from 'src/views/ScheduleList';


describe('ScheduleList', () => {
  let now = '2016-09-22T12:40:09.880Z';
  const originalDateNow = Date.now;

  const createComponent = (props = {}) => (
    <ScheduleList
      onAddPress={noop}
      onCallChosen={noop}
      calls={[
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

  beforeEach(() => {
    Date.now = () => now;
  });

  afterEach(() => {
    Date.now = originalDateNow;
  });

  it('should render', () => {
    expect(render(createComponent()).toJSON()).toMatchSnapshot();
  });

  it('should render the selected call time', () => {
    const el = render(createComponent({
      initialSelectedDate: '2016-09-22T19:40:09.880Z',
      calls: [
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
      calls: [
        fakeScheduledCall({
          callTime: '2016-09-22T19:40:09.880Z',
          activity: fakeActivity(),
        }),
      ],
    }));

    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should disable the add button if the selected date is in the past', () => {
    const el = render(createComponent({
      initialSelectedDate: '2016-09-21T19:40:09.880Z',
      calls: [],
    }));

    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should disabble the add button if the selected date has a call on it', () => {
    const el = render(createComponent({
      initialSelectedDate: '2016-09-22T19:40:09.880Z',
      calls: [
        fakeScheduledCall({
          callTime: '2016-09-22T19:40:09.880Z',
          activity: fakeActivity(),
        }),
      ],
    }));

    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should call onAddPress if the add button is pressed', () => {
    const onAddPress = jest.fn();

    const el = shallow(createComponent({
      initialSelectedDate: '2016-09-22T19:40:09.880Z',
      onAddPress,
      calls: [],
    }));

    el.findWhere(uidEquals('add'))
      .simulate('press');

    expect(onAddPress.mock.calls).toEqual([['2016-09-22T19:40:09.880Z']]);
  });

  it('should call onCallChosen if a call is chosen', () => {
    now = '2016-09-22T12:40:09.880Z';
    const onCallChosen = jest.fn();

    const call = fakeScheduledCall({
      callTime: '2016-09-23T19:40:09.880Z',
    });

    const el = shallow(createComponent({
      onCallChosen,
      initialSelectedDate: '2016-09-23T19:40:09.880Z',
      calls: [call],
    }));

    el.findWhere(uidEquals('callInfo'))
      .simulate('press');

    expect(onCallChosen.mock.calls).toEqual([[call.id]]);
  });

  it('should not call onCallChosen if there is no selected call', () => {
    const onCallChosen = jest.fn();

    const el = shallow(createComponent({
      onCallChosen,
      initialSelectedDate: '2016-09-23T19:40:09.880Z',
      calls: [],
    }));

    el.findWhere(uidEquals('callInfo'))
      .simulate('press');

    expect(onCallChosen.mock.calls).toEqual([]);
  });
});
