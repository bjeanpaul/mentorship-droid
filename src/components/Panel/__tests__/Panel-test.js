import React from 'react';
import { Panel } from 'src/components';
import images from 'src/constants/images';


describe('Panel', () => {
  const createComponent = (props = {}) => (
    <Panel
      title="Foo"
      {...props}
    >
      Bar
    </Panel>
  );

  it('should render', () => {
    expect(render(createComponent({
      children: 'Bar',
    }))).toMatchSnapshot();
  });

  it('should support an icon', () => {
    expect(render(createComponent({
      icon: images.ACTIVITY_RATIONALE,
    }))).toMatchSnapshot();
  });

  it('should embedded type', () => {
    expect(render(createComponent({
      styles: Panel.types.embedded,
    }))).toMatchSnapshot();
  });

  it('should support scrolling', () => {
    expect(render(createComponent({
      scrollable: true,
    }))).toMatchSnapshot();
  });
});
