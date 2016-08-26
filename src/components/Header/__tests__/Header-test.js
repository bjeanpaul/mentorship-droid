import React from 'react';
import { Header, Text } from 'src/components';


describe('Header', () => {
  it('should render', () => {
    expect(render(
      <Header>
        <Text>Header</Text>
      </Header>
    )).toMatchSnapshot();
  });

  it('should support style overriding', () => {
    expect(render(
      <Header style={{ backgroundColor: '#cc3333' }}>
        <Text>Header with style</Text>
      </Header>
    )).toMatchSnapshot();
  });

  it('should support a dark theme', () => {
    expect(render(
      <Header style={Header.themes.dark}>
        <Text style={{ color: '#fff' }}>Header with theme</Text>
      </Header>
    )).toMatchSnapshot();
  });
});
