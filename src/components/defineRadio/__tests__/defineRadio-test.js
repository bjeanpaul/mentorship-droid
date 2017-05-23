import React from 'react';

import Dummy from 'app/scripts/Dummy';
import { defineRadio, defineRadioItem } from 'src/components';


describe('defineRadio', () => {
  const Radio = defineRadio(Dummy);
  const RadioItem = defineRadioItem(Dummy);


  const childAt = (el, i) =>
    el.find(Radio.component)
      .shallow()
      .find('RadioItem')
      .at(i)
      .shallow()
      .find(RadioItem.component);

  it('should render', () => {
    const el = shallow(
      <Radio selection="a">
        <RadioItem value="a">A</RadioItem>
        <RadioItem value="b">B</RadioItem>
      </Radio>
    );

    expect(childAt(el, 0).props())
      .toEqual(jasmine.objectContaining({
        value: 'a',
        children: 'A',
        selected: true,
      }));

    expect(childAt(el, 1).props())
      .toEqual(jasmine.objectContaining({
        value: 'b',
        children: 'B',
        selected: false,
      }));
  });

  it('should ignore falsy items', () => {
    const el = shallow(
      <Radio>
        <RadioItem value="a">A</RadioItem>
        {void 0}
        <RadioItem value="b">B</RadioItem>
      </Radio>
    );

    const children = el.find(Radio.component)
      .shallow()
      .find('RadioItem');

    expect(children.length).toEqual(2);
  });

  it('should call onSelect with the new selection', () => {
    const onSelect = jest.fn();

    const el = shallow(
      <Radio onSelect={onSelect}>
        <RadioItem value="a">A</RadioItem>
        <RadioItem value="b">B</RadioItem>
      </Radio>
    );

    childAt(el, 0)
      .simulate('select');

    expect(onSelect.mock.calls).toEqual([['a']]);

    childAt(el, 1)
      .simulate('select');

    expect(onSelect.mock.calls).toEqual([['a'], ['b']]);
  });

  it('should allow items to override onSelect', () => {
    const onSelect = jest.fn();
    const onSelectOverride = jest.fn();

    const el = shallow(
      <Radio onSelect={onSelect}>
        <RadioItem value="a" onSelect={onSelectOverride}>A</RadioItem>
        <RadioItem value="b">B</RadioItem>
      </Radio>
    );

    childAt(el, 0)
      .simulate('select');

    expect(onSelect.mock.calls).toEqual([]);
    expect(onSelectOverride.mock.calls).toEqual([['a']]);

    childAt(el, 1)
      .simulate('select');

    expect(onSelect.mock.calls).toEqual([['b']]);
    expect(onSelectOverride.mock.calls).toEqual([['a']]);
  });
});
