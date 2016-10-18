import React from 'react';
import { View } from 'react-native';
import { Text } from 'src/components';


describe('Text', () => {
  it('should render', () => {
    expect(render(
      <Text>
        This is normal text. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </Text>
    )).toMatchSnapshot();
  });

  it('should render titles', () => {
    expect(render(
      <Text style={Text.types.title}>
        This is a section title. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Text>
    )).toMatchSnapshot();
  });

  it('should render secondary titles', () => {
    expect(render(
      <Text style={Text.types.secondaryTitle}>
        This is a section title. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Text>
    )).toMatchSnapshot();
  });

  it('should render paragraphs', () => {
    expect(render(
      <Text style={Text.types.paragraph}>
        This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </Text>
    )).toMatchSnapshot();
  });

  it('should render section titles', () => {
    expect(render(
      <Text style={Text.types.sectionTitle}>
        This is a section title. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Text>
    )).toMatchSnapshot();
  });

  it('should support a light theme', () => {
    expect(render(
      <View style={{ backgroundColor: '#000' }}>
        <Text style={Text.themes.light}>Title with theme</Text>
      </View>
    )).toMatchSnapshot();
  });
});
