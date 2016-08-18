import React from 'react';
import { shallow } from 'enzyme';
import Landing from '../index';

describe('Landing', () => {
  function foo() {}
  function bar() {}

  it('should map `onGetStartedPress` and `onLoginPress`', () => {
    expect(
      <Landing
        onGetStartedPress={foo}
        onLoginPress={bar}
      />
    ).toMatchSnapshot();
  });

  it('should be able to tap and fire `onGetStartedPress`', () => {
    const onGetStartedPress = jest.fn();
    const el = shallow(
      <Landing
        onGetStartedPress={onGetStartedPress}
        onLoginPress={bar}
      />
    );
    el.find('Button').simulate('press');
    expect(onGetStartedPress).toBeCalled();
  });

  it('should be able to tap and fire `onLoginPress`', () => {
    const onLoginPress = jest.fn();
    const el = shallow(
      <Landing
        onGetStartedPress={foo}
        onLoginPress={onLoginPress}
      />
    );
    el.find('Link').simulate('press');
    expect(onLoginPress).toBeCalled();
  });
});
