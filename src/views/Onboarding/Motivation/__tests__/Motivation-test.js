import { noop } from 'lodash';
import React from 'react';

import { fakeProfile } from 'app/scripts/helpers';
import { Motivation } from 'src/views/Onboarding';


describe('Motivation', () => {
  const createComponent = (props = {}) => (
    <Motivation
      profile={fakeProfile({ motivation: 'To provide for my family' })}
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

