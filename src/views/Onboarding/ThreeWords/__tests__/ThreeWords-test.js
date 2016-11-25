import { noop } from 'lodash';
import React from 'react';

import { fakeProfile } from 'app/scripts/helpers';
import { ThreeWords } from 'src/views/Onboarding';


describe('ThreeWords', () => {
  const createComponent = (props = {}) => (
    <ThreeWords
      profile={fakeProfile({ tags: 'typing thinking understanding' })}
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

