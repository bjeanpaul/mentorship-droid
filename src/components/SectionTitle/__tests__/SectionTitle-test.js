import React from 'react';
import { SectionTitle } from 'src/components';


describe('Section', () => {
  it('should render', () => {
    expect(render(
      <SectionTitle>Lorem ipsum dolor sit amet</SectionTitle>
    )).toMatchSnapshot();
  });

  it('should support style overrides', () => {
    expect(render(
      <SectionTitle style={{ color: '#333' }}>
        Lorem ipsum dolor sit amet
      </SectionTitle>
    )).toMatchSnapshot();
  });
});
