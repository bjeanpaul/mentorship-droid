import React from 'react';
import MultiLineTextInput from 'src/components/MultiLineTextInput';


describe('MultiLineTextInput', () => {
  it('should render correctly', () => {
    expect(render(<MultiLineTextInput />)).toMatchSnapshot();
  });


  it('should show character count with word text', () => {
    const el = shallow(
      <MultiLineTextInput
        maxLength={50}
      />
    );
    expect(el.find('Text').at(0).children().nodes[1]).toEqual(50);
  });
});
