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

  it('should call onSelect with the new selection', () => {
    const onSelect = jest.fn();

    const el = shallow(
      <Radio onSelect={onSelect}>
        <RadioItem value="a">A</RadioItem>
        <RadioItem value="b">B</RadioItem>
      </Radio>
    );

    el.find('RadioItem')
      .at(0)
      .shallow()
      .simulate('press');

    expect(onSelect.mock.calls).toEqual([['a']]);

    el.find('RadioItem')
      .at(1)
      .shallow()
      .simulate('press');

    expect(onSelect.mock.calls).toEqual([['a'], ['b']]);
  });
});
