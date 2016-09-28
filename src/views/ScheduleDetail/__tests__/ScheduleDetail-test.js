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
      onDismissPress={noop}
      onActivityPress={noop}
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

  it('should render the done button disabled if the date or time are not given', () => {
    const el = shallow(createComponent());

    expect(el.findWhere(uidEquals('done')).prop('disabled')).toBe(true);

    el.setState({
      date: {
        year: 1990,
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
      is24Hour: true,
    }]]);

    expect(el.state('time')).toEqual({
      hour: 21,
      minute: 23,
    });
  });

  it('should call onActivityPress when the activity is pressed', () => {
    const onActivityPress = jest.fn();

    shallow(createComponent({ onActivityPress }))
      .findWhere(uidEquals('time'))
      .simulate('press');
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
