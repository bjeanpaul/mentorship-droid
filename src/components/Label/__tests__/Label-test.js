import React from 'react';
import Label from 'src/components/Label';


describe('Label', () => {
  it('should render its title', () => {
    expect(render(<Label title="foo" />)).toMatchSnapshot();
  });

  it('should support style overriding', () => {
    expect(render(
      <Label
        title="foo"
        style={{ fontSize: 23 }}
      />
    )).toMatchSnapshot();
  });
});
