jest.mock('DatePickerAndroid');
jest.mock('TimePickerAndroid');


import moment from 'moment';
import React from 'react';
import { noop } from 'lodash';
import immediate from 'immediate-promise';
import { DatePickerAndroid, TimePickerAndroid } from 'react-native';

import { uidEquals, fakeActivity } from 'app/scripts/helpers';
import ScheduleDetail from 'src/views/ScheduleDetail';


describe('ScheduleDetail', () => {
  beforeEach(() => {
    DatePickerAndroid.open.mockClear();
    TimePickerAndroid.open.mockClear();
  });

  const createComponent = (props = {}) => (
    <ScheduleDetail
      callTimes={[]}
      onDismissPress={noop}
      onActivityPress={noop}
      onActivityRemovePress={noop}
      onDone={noop}
      {...props}
    />
  );

  it('should render', () => {
    expect(render(createComponent()).toJSON()).toMatchSnapshot();
  });

  it('should render the activity title if an activity is given', () => {
    expect(render(createComponent({
      activity: fakeActivity(),
    }))
    .toJSON())
    .toMatchSnapshot();
  });

  it('should render date collision error feedback', () => {
    expect(render(createComponent({
      initialCallTime: '2016-09-22T14:31:23.431Z',
      callTimes: ['2016-09-21T10:31:23.431Z', '2016-09-22T11:31:23.431Z'],
    })).toJSON()).toMatchSnapshot();
  });

  it('should render past time error feedback', () => {
    expect(render(createComponent({
      initialCallTime: moment().subtract(1, 'minute').toISOString(),
      initialCallTimeHasChanged: true,
    })).toJSON()).toMatchSnapshot();
  });

  it('should use an initial date if given', () => {
    const el = shallow(createComponent({
      initialDate: '2016-09-22T14:31:23.431Z',
    }));

    expect(el.state()).toEqual(jasmine.objectContaining({
      date: {
        year: 2016,
        month: 8,
        date: 22,
      },
    }));
  });

  it('should use an initial time if given', () => {
    const el = shallow(createComponent({
      initialTime: '2016-09-22T14:31:23.431Z',
    }));

    expect(el.state()).toEqual(jasmine.objectContaining({
      time: {
        hour: 16,
        minute: 31,
      },
    }));
  });

  it('should use an initial date object if given', () => {
    const el = shallow(createComponent({
      initialDate: {
        year: 2016,
        month: 8,
        date: 22,
      },
    }));

    expect(el.state()).toEqual(jasmine.objectContaining({
      date: {
        year: 2016,
        month: 8,
        date: 22,
      },
    }));
  });

  it('should use an initial time if given', () => {
    const el = shallow(createComponent({
      initialTime: {
        hour: 16,
        minute: 31,
      },
    }));

    expect(el.state()).toEqual(jasmine.objectContaining({
      time: {
        hour: 16,
        minute: 31,
      },
    }));
  });

  it('should use an initial call time as date and time if given', () => {
    const el = shallow(createComponent({
      initialDate: '2016-09-22T14:31:23.431Z',
      initialCallTime: '2016-09-23T14:31:23.431Z',
    }));

    expect(el.state()).toEqual(jasmine.objectContaining({
      date: {
        year: 2016,
        month: 8,
        date: 23,
      },
      time: {
        hour: 16,
        minute: 31,
      },
    }));
  });

  it('should render the done button disabled if the date or time are not given', () => {
    const el = shallow(createComponent());

    expect(el.findWhere(uidEquals('done')).prop('disabled')).toBe(true);

    el.setState({
      date: {
        year: 2017,
        month: 2,
        day: 3,
      },
    });

    expect(el.findWhere(uidEquals('done')).prop('disabled')).toBe(true);

    el.setState({
      time: {
        hour: 13,
        minute: 23,
      },
    });

    expect(el.findWhere(uidEquals('done')).prop('disabled')).toBe(false);

    el.setState({
      date: null,
    });

    expect(el.findWhere(uidEquals('done')).prop('disabled')).toBe(true);
  });

  it('should parse initialCallTime prop into state if given', () => {
    expect(shallow(createComponent({
      initialCallTime: '2016-09-22T14:31:23.431Z',
    }))
    .state())
    .toEqual(jasmine.objectContaining({
      date: {
        year: 2016,
        month: 8,
        date: 22,
      },
      time: {
        hour: 16,
        minute: 31,
      },
    }));
  });

  it('should allow the user to set the date when the date value is pressed', async () => {
    DatePickerAndroid.open.mockImplementation(() => Promise.resolve({
      action: DatePickerAndroid.dateSetAction,
      year: 1991,
      month: 3,
      day: 2,
    }));

    const el = shallow(createComponent({
      initialCallTime: '1990-03-03T14:31:23.431Z',
    }));

    el.findWhere(uidEquals('date'))
      .simulate('press');

    await immediate();

    expect(DatePickerAndroid.open.mock.calls.length).toEqual(1);

    const [[{ date }]] = DatePickerAndroid.open.mock.calls;

    expect(date.toISOString()).toEqual(moment({
      year: 1990,
      month: 2,
      date: 3,
    })
    .toISOString());

    expect(el.state('date')).toEqual({
      year: 1991,
      month: 3,
      date: 2,
    });
  });

  it('should allow the user to set the time when the time value is pressed', async () => {
    TimePickerAndroid.open.mockImplementation(() => Promise.resolve({
      action: TimePickerAndroid.timeSetAction,
      hour: 21,
      minute: 23,
    }));

    const el = shallow(createComponent());

    el.findWhere(uidEquals('time'))
      .simulate('press');

    await immediate();

    expect(TimePickerAndroid.open.mock.calls).toEqual([[{
      is24Hour: false,
    }]]);

    expect(el.state('time')).toEqual({
      hour: 21,
      minute: 23,
    });
  });

  it('should call onActivityPress when the activity is pressed', () => {
    const onActivityPress = jest.fn();

    shallow(createComponent({
      onActivityPress,
      initialDate: {
        year: 2016,
        month: 8,
        date: 22,
      },
      initialTime: {
        hour: 16,
        minute: 31,
      },
    }))
    .findWhere(uidEquals('activity'))
    .simulate('press');

    expect(onActivityPress.mock.calls).toEqual([[{
      date: {
        year: 2016,
        month: 8,
        date: 22,
      },
      time: {
        hour: 16,
        minute: 31,
      },
    }]]);
  });

  it('should call onActivityRemovePress when activity remove is pressed', () => {
    const onActivityRemovePress = jest.fn();

    shallow(createComponent({
      activity: fakeActivity(),
      onActivityRemovePress,
    }))
      .findWhere(uidEquals('activity'))
      .shallow()
      .findWhere(uidEquals('removeActivity'))
      .simulate('press');

    expect(onActivityRemovePress.mock.calls).toEqual([[]]);
  });

  it('should call onDone with the chosen values', () => {
    const onDone = jest.fn();

    shallow(createComponent({ onDone }))
      .setState({
        date: {
          year: 1991,
          month: 3,
          date: 2,
        },
        time: {
          hour: 21,
          minute: 23,
        },
      })
      .findWhere(uidEquals('done'))
      .simulate('press');

    expect(onDone.mock.calls).toEqual([[{
      callTime: moment({
        year: 1991,
        month: 3,
        date: 2,
        hour: 21,
        minute: 23,
      })
      .toISOString(),
    }]]);
  });
});
