import React from 'react';
import { noop } from 'lodash';

import { Greeting } from 'src/views/Onboarding';


describe('Greeting', () => {
  it('should map props correctly', () => {
    expect(render(
      <Greeting
        name="Jeff"
        onCompleteProfilePress={noop}
      />
    ).toJSON()).toMatchSnapshot();
  });

  it('should call `onCompleteProfilePress` when complete profile is pressed', () => {
    const onCompleteProfilePress = jest.fn();
    const el = shallow(
      <Greeting
        name="Jeff"
        onCompleteProfilePress={onCompleteProfilePress}
      />
    );
    el.find('Button').simulate('press');
    expect(onCompleteProfilePress).toBeCalled();
  });
});
