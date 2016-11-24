import React from 'react';
import { noop } from 'lodash';

import { Greeting } from 'src/views/Onboarding';
import { fakeProfile, uidEquals } from 'app/scripts/helpers';


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

    el.findWhere(uidEquals('completeProfile'))
      .simulate('press');

    expect(onNextPress.mock.calls).toEqual([[]]);
  });
});
