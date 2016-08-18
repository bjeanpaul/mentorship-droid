import React from 'react';
import { Text } from 'react-native';
import BaseView from 'src/components/BaseView';


describe('BaseView', () => {
  it('should render its children', () => {
    expect(
      <BaseView><Text>I am children.</Text></BaseView>
    ).toMatchSnapshot();
  });

  it('should support style overriding', () => {
    expect(
      <BaseView
        style={{
          backgroundColor: 'red',
        }}
      >
        <Text>I am children.</Text>
      </BaseView>
    ).toMatchSnapshot();
  });
});
