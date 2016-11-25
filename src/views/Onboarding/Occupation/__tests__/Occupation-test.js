import { noop } from 'lodash';
import React from 'react';

import { fakeProfile } from 'app/scripts/helpers';
import { Occupation } from 'src/views/Onboarding';


describe('Occupation', () => {
  const createComponent = (props = {}) => (
    <Occupation
      profile={fakeProfile({
        jobTitle: 'Uncle',
        jobSector: 'Family',
      })}
      onChange={noop}
      onBackPress={noop}
      onNextPress={noop}
      {...props}
    />
  );

  it('should render', () => {
    const el = render(createComponent());
    expect(el.toJSON()).toMatchSnapshot();
  });
});

