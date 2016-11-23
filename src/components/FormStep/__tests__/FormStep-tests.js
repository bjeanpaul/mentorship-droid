import { noop } from 'lodash';
import React from 'react';
import { Text } from 'react-native';

import { FormStep } from 'src/components';

describe('FormStep', () => {
  const createComponent = (props = {}) => (
    <FormStep
      title="Test Test Title"
      onBackPress={noop}
      onNextPress={noop}
      onDonePress={noop}
      {...props}
    >
      <Text>I am a child.</Text>
    </FormStep>
  );

  it('should render', () => {
    const el = render(createComponent());
    expect(el).toMatchSnapshot();
  });

  it('should support disabling its back button', () => {
    const el = render(createComponent({
      paginationBackDisabled: true,
    }));

    expect(el).toMatchSnapshot();
  });
});
