import { noop } from 'lodash';
import React from 'react';

import { fakeProfile } from 'app/scripts/helpers';
import { Inspiration } from 'src/views/Onboarding';


describe('Inspiration', () => {
  const createComponent = (props = {}) => (
    <Inspiration
      profile={fakeProfile({ inspiration: 'Music, of course' })}
      onChange={noop}
      onNextPress={noop}
      onBackPress={noop}
      {...props}
    />
  );

  it('should render', () => {
    const el = render(createComponent());
    expect(el.toJSON()).toMatchSnapshot();
  });
});

