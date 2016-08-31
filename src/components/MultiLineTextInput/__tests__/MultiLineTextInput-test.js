import React from 'react';
import MultiLineTextInput from 'src/components/MultiLineTextInput';


describe('MultiLineTextInput', () => {
  it('should render correctly', () => {
    expect(render(<MultiLineTextInput />)).toMatchSnapshot();
  });

  it('should show initial number of characters', () => {
    const el = shallow(
      <MultiLineTextInput
        value="12345"
        maxLength={50}
      />
    );
    expect(el.find('Text').at(0).children().nodes[0]).toEqual(5);
  });

  it('should show maximum character limit', () => {
    const el = shallow(
      <MultiLineTextInput
        maxLength={50}
      />
    );
    expect(el.find('Text').at(0).children().nodes[1]).toEqual(50);
  });
});
