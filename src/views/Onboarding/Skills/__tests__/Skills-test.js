import { noop } from 'lodash';
import React from 'react';

import { fakeProfile } from 'app/scripts/helpers';
import { Skills } from 'src/views/Onboarding';


describe('Skills', () => {
  const createComponent = (props = {}) => (
    <Skills
      profile={fakeProfile({
        skills: "I had a bunch when I was younger, but now I'm old and tired.",
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

