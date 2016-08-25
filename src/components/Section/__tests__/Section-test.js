import React from 'react';
import { Section } from 'src/components';


describe('Section', () => {
  it('should render', () => {
    expect(render(
      <Section title="Foo bar baz">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat
      </Section>
    )).toMatchSnapshot();
  });
});
