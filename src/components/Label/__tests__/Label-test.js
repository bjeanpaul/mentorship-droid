import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import Label from 'src/components/Label';


describe('Label', () => {
  it('should render its title', () => {
    expect(<Label title="foo" />).toMatchSnapshot();
  });

  it('should support style overriding', () => {
    expect(
      <Label
        title="foo"
        style={{fontSize: 23}}
      />
    ).toMatchSnapshot()
  });
});
