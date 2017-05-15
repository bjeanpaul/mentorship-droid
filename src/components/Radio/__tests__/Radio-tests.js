import React from 'react';
import { Radio, RadioItem } from 'src/components';


describe('Radio', () => {
  it('should render', () => {
    expect(render(
      <Radio>
        <RadioItem value="a">A</RadioItem>
        <RadioItem value="b">B</RadioItem>
      </Radio>
    )).toMatchSnapshot();
  });
});
