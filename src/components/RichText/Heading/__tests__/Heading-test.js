import React from 'react';
import RichText from 'src/components/RichText';


describe('RichText/Heading', () => {
  it('should render', () => {
    expect(render(
      <RichText
        content={[{
          type: 'heading',
          value: 'Foo',
        }]}
      />
    ).toJSON()).toMatchSnapshot();
  });
});
