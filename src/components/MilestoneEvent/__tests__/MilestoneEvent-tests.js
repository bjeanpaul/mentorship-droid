import React from 'react';
import MilestoneEvent from 'src/components/MilestoneEvent';
import { imageUrl } from 'src/api';


describe('MilestoneEvent', () => {
  const createComponent = (props = {}) => (
    <MilestoneEvent
      image={imageUrl('/foo.jpg')}
      title="pew pew pew"
      color="blue"
      {...props}
    />
  );

  it('should render the props', () => {
    expect(render(createComponent()).toJSON()).toMatchSnapshot();
  });

  it('should not render the category image if it does not exist', () => {
    expect(render(createComponent({
      image: imageUrl(null),
    })).toJSON()).toMatchSnapshot();
  });
});
