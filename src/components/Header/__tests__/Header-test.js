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

  it('should support dark theme', () => {
    expect(render(
      <Header style={Header.themes.dark}>
        <Text style={{ color: '#fff' }}>Header with dark theme</Text>
      </Header>
    )).toMatchSnapshot();
  });

  it('should support orange theme', () => {
    expect(render(
      <Header style={Header.themes.orange}>
        <Text style={{ color: '#fff' }}>Header with orange aheme</Text>
      </Header>
    )).toMatchSnapshot();
  });
});
