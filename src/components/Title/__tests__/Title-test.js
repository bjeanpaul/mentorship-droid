import React from 'react';
import { Title } from 'src/components';


describe('Title', () => {
  it('should render', () => {
    expect(render(
      <Title>Title</Title>
    )).toMatchSnapshot();
  });

  it('should support style overriding', () => {
    expect(render(
      <Title style={{ color: '#222' }}>Title with style</Title>
    )).toMatchSnapshot();
  });

  it('should support theming', () => {
    expect(render(
      <View style={{ backgroundColor: '#000' }}>
        <Title theme={Title.themes.light}>Title with theme</Title>
      </View>
    )).toMatchSnapshot();
  });
});
