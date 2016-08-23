import React from 'react';
import { Text } from 'react-native';
import { Header, Title } from 'src/components';


describe('Header', () => {
  it('should render', () => {
    expect(render(
      <Title>Microscopic Hummingbirds</Title>
    )).toMatchSnapshot();
  });

  it('should support style overriding', () => {
    expect(render(
      <Title style={{ fontSize: 22 }}>Microscopic Hummingbirds</Title>
    )).toMatchSnapshot();
  });

  it('should support theming', () => {
    expect(render(
      <Title theme={{ title: { color: '#eee' } }}>Microscopic Hummingbirds</Title>
    )).toMatchSnapshot();
  });
});
