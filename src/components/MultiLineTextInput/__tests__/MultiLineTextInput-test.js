import React from 'react';
import MultiLineTextInput from 'src/components/MultiLineTextInput';
import { uidEquals } from 'app/scripts/helpers';


describe('MultiLineTextInput', () => {
  const getCharCount = el => el
    .findWhere(uidEquals('charCount'))
    .children()
    .nodes.join('');

  it('should render', () => {
    expect(render(<MultiLineTextInput />)).toMatchSnapshot();
  });

  it('should show the number of characters used', () => {
    const el = shallow(<MultiLineTextInput value="21" maxLength={50} />);
    expect(getCharCount(el)).toEqual('2/50');

    el.findWhere(uidEquals('input'))
      .simulate('changeText', '2123');

    expect(getCharCount(el)).toEqual('4/50');
  });

  it('should call onChangeText() when text changes', () => {
    const onChangeText = jest.fn();
    const el = shallow(<MultiLineTextInput onChangeText={onChangeText} />);

    el.findWhere(uidEquals('input'))
      .simulate('changeText', '21');

    expect(onChangeText.mock.calls).toEqual([['21']]);
  });
});
