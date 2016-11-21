import React from 'react';
import { noop } from 'lodash';

import { fakeProfile } from 'app/scripts/helpers';
import { Greeting } from 'src/views/Onboarding';


describe('Greeting', () => {
  const createComponent = (props = {}) => (
    <Greeting
      profile={fakeProfile({ firstName: 'Jeff' })}
      onCompleteProfilePress={noop}
      {...props}
    />
  );

  it('should map props correctly', () => {
    expect(render(createComponent()).toJSON()).toMatchSnapshot();
  });

  it('should call `onCompleteProfilePress` when complete profile is pressed', () => {
    const onCompleteProfilePress = jest.fn();
    const el = shallow(createComponent({ onCompleteProfilePress }));
    el.find('Button').simulate('press');
    expect(onCompleteProfilePress.mock.calls).toEqual([[]]);
  });
});
