import React, { PropTypes } from 'react';

import NavigationStack from 'src/components/NavigationStack';
import { createStack, createRoute } from 'src/navigationHelpers';
import { Text } from 'src/components';


describe('NavigationStack', () => {
  const A = ({ text }) => <Text>A {text}</Text>;
  const B = ({ text }) => <Text>B {text}</Text>;
  A.propTypes = B.propTypes = { text: PropTypes.string };

  const createComponent = (props = {}) => (
    <NavigationStack
      navigationState={createStack([createRoute('A', { text: 'Foo' })])}
      routes={{
        A,
        B,
      }}
      {...props}
    />);

  it('should display the current route', () => {
    expect(render(createComponent({
      navigationState: createStack([createRoute('A', { text: 'Foo' })]),
      routes: {
        A,
        B,
      },
    }))).toMatchSnapshot();
  });

  it('should display a not-found view if the route is not found', () => {
    expect(render(createComponent({
      navigationState: createStack([createRoute('B')]),
      routes: { A },
    }))).toMatchSnapshot();
  });
});
