import { noop } from 'lodash';
import React from 'react';

import { uidEquals, fakeProfile } from 'app/scripts/helpers';
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

  it('should disable pagination if more or less than 3 words have been given', () => {
    const paginationDisabled = tags =>
      shallow(createComponent({ profile: fakeProfile({ tags }) }))
        .findWhere(uidEquals('formStep'))
        .prop('paginationDisabled');

    expect(paginationDisabled('')).toBe(true);
    expect(paginationDisabled('foo bar')).toBe(true);
    expect(paginationDisabled('foo bar baz quux')).toBe(true);
    expect(paginationDisabled('foo bar baz')).toBe(false);
    expect(paginationDisabled('foo,bar  baz')).toBe(false);
  });
});

