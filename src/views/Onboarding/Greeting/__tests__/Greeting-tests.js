import React from 'react';
import { noop } from 'lodash';

import { fakeProfile } from 'app/scripts/helpers';
import { Greeting } from 'src/views/Onboarding';


describe('Greeting', () => {
  const createComponent = (props = {}) => (
    <Greeting
      profile={fakeProfile({ firstName: 'Jeff' })}
      onNextPress={noop}
      {...props}
    />
  );

  it('should map props correctly', () => {
    expect(render(createComponent()).toJSON()).toMatchSnapshot();
  });

  it('should call `onNextPress` when complete profile is pressed', () => {
    const onNextPress = jest.fn();
    const el = shallow(createComponent({ onNextPress }));
    el.find('Button').simulate('press');
    expect(onNextPress.mock.calls).toEqual([[]]);
  });
});
