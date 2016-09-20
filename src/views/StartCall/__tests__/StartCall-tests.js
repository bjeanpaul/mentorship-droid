import { noop } from 'lodash';
import React from 'react';

import StartCall from 'src/views/StartCall';
import { uidEquals, fakeScheduledCall, fakeActivity } from 'app/scripts/helpers';


describe('StartCall', () => {
  const createComponent = (props = {}) => (
    <StartCall
      onActivatePress={noop}
      onDismissPress={noop}
      {...props}
    />
  );

  it('should render', () => {
    expect(render(createComponent()).toJSON()).toMatchSnapshot();
  });

  it('should render with a call time', () => {
    expect(render(createComponent({
      scheduledCall: fakeScheduledCall({ time: 0 }),
    }))
    .toJSON())
    .toMatchSnapshot();
  });

  it('should render with a call time and activity', () => {
    expect(render(createComponent({
      scheduledCall: fakeScheduledCall({ time: 0 }),
      activity: fakeActivity(),
    }))
    .toJSON())
    .toMatchSnapshot();
  });

  it('should call onDismissPress when dismiss button is pressed', () => {
    const onDismissPress = jest.fn();
    const el = shallow(createComponent({ onDismissPress }));

    el.findWhere(uidEquals('dismiss'))
      .simulate('press');

    expect(onDismissPress.mock.calls).toEqual([[]]);
  });

  it('should call onActivatePress when dismiss button is pressed', () => {
    const onActivatePress = jest.fn();
    const el = shallow(createComponent({ onActivatePress }));

    el.findWhere(uidEquals('activate'))
      .simulate('press');

    expect(onActivatePress.mock.calls).toEqual([[]]);
  });
});
