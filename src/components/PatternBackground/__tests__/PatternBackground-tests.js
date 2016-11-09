import React from 'react';

import { Text, PatternBackground } from 'src/components';
import { uidEquals } from 'app/scripts/helpers';


describe.only('PatternBackground', () => {
  it('should render', () => {
    const el = render(
      <PatternBackground>
        <Text>Foo</Text>
      </PatternBackground>
    );

    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should repeat the pattern as many times as is needed to fit its height', () => {
    const el = shallow(
      <PatternBackground
        patternHeight={32}
        initialHeight={128}
      />
    );

    expect(el.findWhere(uidEquals('patterns')).find('Image').length).toEqual(4);
  });

  it('should respond to layout events', () => {
    const el = shallow(
      <PatternBackground
        patternHeight={32}
        initialHeight={128}
      />
    );

    el.findWhere(uidEquals('container'))
      .simulate('layout', {
        nativeEvent: {
          layout: {
            height: 256,
          },
        },
      });

    expect(el.findWhere(uidEquals('patterns')).find('Image').length).toEqual(8);
  });
});
