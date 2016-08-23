import React from 'react';
import { Header, Title } from 'src/components';


describe('Header', () => {
  it('should render', () => {
    expect(render(
      <Header>
        <Title>Microscopic Hummingbirds</Title>
      </Header>
    )).toMatchSnapshot();
  });

  it('should support style overriding', () => {
    expect(render(
      <Header style={{ backgroundColor: '#cc3333' }}>
        <Title>Microscopic Hummingbirds</Title>
      </Header>
    )).toMatchSnapshot();
  });

  it('should support theming', () => {
    expect(render(
      <Header theme={{ header: { backgroundColor: '#33cccc' } }}>
        <Title>Microscopic Hummingbirds</Title>
      </Header>
    )).toMatchSnapshot();
  });
});
