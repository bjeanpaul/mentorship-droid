import { noop } from 'lodash';
import React from 'react';
import Landing from '../index';
import { uidEquals } from 'app/scripts/helpers';


describe('Landing', () => {
  const createComponent = (props = {}) => (
    <Landing
      onGetStartedPress={noop}
      onLoginPress={noop}
      {...props}
    />
  );

  it('should map `onGetStartedPress` and `onLoginPress`', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });

  it('should be able to tap and fire `onGetStartedPress`', () => {
    const onGetStartedPress = jest.fn();
    const el = shallow(createComponent({ onGetStartedPress }));

    el.findWhere(uidEquals('getStarted'))
      .simulate('press');

    expect(onGetStartedPress).toBeCalled();
  });

  it('should be able to tap and fire `onLoginPress`', () => {
    const onLoginPress = jest.fn();
    const el = shallow(createComponent({ onLoginPress }));

    el.findWhere(uidEquals('login'))
      .simulate('press');

    expect(onLoginPress).toBeCalled();
  });
});
