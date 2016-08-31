import React from 'react';
import { noop } from 'lodash';
import OnboardingThreeWords from 'src/views/OnboardingThreeWords';


describe('OnboardingOwnMentor', () => {
  function createComponent(props = {}) {
    return (
      <OnboardingThreeWords
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
