import React from 'react';
import Hello from '../index';

describe('OnboardingStepGreeting', () => {
  function noop() {}

  it('should map props correctly', () => {
    expect(render(
      <Hello
        name="Jeff"
        onCompleteProfilePress={noop}
      />
    ).toJSON()).toMatchSnapshot();
  });

  it('should be able to tap and fire `onCompleteProfilePress`', () => {
    const onCompleteProfilePress = jest.fn();
    const el = shallow(
      <Hello
        name="Jeff"
        onCompleteProfilePress={onCompleteProfilePress}
      />
    );
    el.find('Button').simulate('press');
    expect(onCompleteProfilePress).toBeCalled();
  });
});
