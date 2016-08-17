import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import Label from 'src/components/Label';


describe('Label', () => {
  it('should render its title', () => {
    const el = shallow(<Label title="foo" />);
    expect(el.children().text()).toEqual("foo")
  });

  fit('should support style overriding', () => {
    const el = shallow(
      <Label
        title="foo"
        style={{fontSize: 23}}
      />);

      expect(el.props()).toEqual(jasmine.objectContaining({
        style: jasmine.arrayContaining([{fontSize: 23}])
      }))
  });
});
