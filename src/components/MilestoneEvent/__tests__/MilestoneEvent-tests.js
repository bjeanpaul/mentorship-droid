import React from 'react';
import MilestoneEvent from 'src/components/MilestoneEvent';
import { imageUrl } from 'src/api';


describe('MilestoneEvent', () => {
  it('should render the props', () => {
    expect(render(
      <MilestoneEvent
        image={imageUrl('/foo.jpg')}
        title="pew pew pew"
        color="blue"
      />
    )).toMatchSnapshot();
  });
});
