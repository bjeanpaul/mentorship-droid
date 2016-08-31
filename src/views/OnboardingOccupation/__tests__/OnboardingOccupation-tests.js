import React from 'react';
import { noop } from 'lodash';
import OnboardingOccupation from 'src/views/OnboardingOccupation';


describe('OnboardingOccupation', () => {
  function createComponent(props = {}) {
    return (
      <OnboardingOccupation
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
      jobTitle: 'Uncle',
      jobSector: 'Family Member',
    }))).toMatchSnapshot();
  });
});
