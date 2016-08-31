import React from 'react';
import { noop } from 'lodash';
import OnboardingMotivation from 'src/views/OnboardingMotivation';


describe('OnboardingOccupation', () => {
  function createComponent(props = {}) {
    return (
      <OnboardingMotivation
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

  it('should enable pagination next button', () => {
    expect(render(createComponent({
      jobMotivation: 'Because I love children.',
    }))).toMatchSnapshot();
  });
});
