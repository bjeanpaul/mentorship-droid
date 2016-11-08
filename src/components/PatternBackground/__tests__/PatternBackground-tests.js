import React from 'react';

import { Text, PatternBackground } from 'src/components';
import { uidEquals } from 'app/scripts/helpers';


describe.only('PatternBackground', () => {
  it('should render', () => {
    <PatternBackground>
      <Text>Foo</Text>
    </PatternBackground>
  });

  it('should repeat the pattern as many times as is needed to fit its height', () => {
    const el = shallow(
      <PatternBackground
        patternHeight={32}
        initialHeight={256}
      />);

    expect(el.findWhere(uidEquals('patterns')).find('Image').length).toEqual(8);

    el.instance()
      .onLayout({
        nativeEvent: {
          layout: {
            height: 512,
          },
        },
      });

    expect(el.findWhere(uidEquals('patterns')).find('Image').length).toEqual(8);
  });
});
