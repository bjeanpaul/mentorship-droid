import React from 'react';
import { noop } from 'lodash';
import OnboardingOwnMentor from 'src/views/OnboardingOwnMentor';


describe('OnboardingOwnMentor', () => {
  function createComponent(props = {}) {
    return (
      <OnboardingOwnMentor
        onNextPress={noop}
        onBackPress={noop}
        onChangeText={noop}
        {...props}
      />
    );
  }

  it('should render', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });
});
