import React from 'react';
import { RadioGrid, RadioGridItem } from 'src/components';


describe('RadioGrid', () => {
  it('should render', () => {
    expect(render(
      <RadioGrid>
        <RadioGridItem value="a">A</RadioGridItem>
        <RadioGridItem value="b">B</RadioGridItem>
      </RadioGrid>
    )).toMatchSnapshot();
  });
});
