import React from 'react';
import { noop } from 'lodash';
import OnboardingSkills from 'src/views/OnboardingSkills';


describe('OnboardingOccupation', () => {
  function createComponent(props = {}) {
    return (
      <OnboardingSkills
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
