import { noop } from 'lodash';
import React from 'react';
import { Text } from 'react-native';

import FormStep from 'src/views/FormStep';

describe('FormStep', () => {
  const createComponent = (props = {}) => (
    <FormStep
      title="Test Test Title"
      onBackPress={noop}
      onNextPress={noop}
      {...props}
    >
      <Text>I am a child.</Text>
    </FormStep>
  );

  it('should render', () => {
    const el = render(createComponent());
    expect(el).toMatchSnapshot();
  });
});
