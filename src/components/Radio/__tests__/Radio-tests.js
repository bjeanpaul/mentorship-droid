import React from 'react';
import { Radio, RadioItem } from 'src/components';


describe('Radio', () => {
  it('should render', () => {
    expect(render(
      <Radio.component>
        <RadioItem.component value="a">A</RadioItem.component>
        <RadioItem.component value="b">B</RadioItem.component>
      </Radio.component>
    )).toMatchSnapshot();
  });
});
