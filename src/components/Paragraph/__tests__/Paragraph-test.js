import React from 'react';
import { Paragraph } from 'src/components';


describe('Section', () => {
  it('should render', () => {
    expect(render(
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat
      </Paragraph>
    )).toMatchSnapshot();
  });

  it('should support style overrides', () => {
    expect(render(
      <Paragraph style={{ color: '#111' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat
      </Paragraph>
    )).toMatchSnapshot();
  });
});
