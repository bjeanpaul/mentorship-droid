import React from 'react';
import Icon from 'src/components/Icon';


describe('Icon', () => {
  it('should render its `backLight` type', () => {
    expect(render(
      <Icon type={Icon.types.backLight}/>
    )).toMatchSnapshot();
  });

  it('should support style overriding', () => {
    expect(render(
      <Icon
        type={Icon.types.backLight}
        style={{ backgroundColor: '#333' }}
      />
    )).toMatchSnapshot();
  });
});
