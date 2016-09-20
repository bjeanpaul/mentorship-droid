import React from 'react';
import MilestoneEvent from 'src/components/MilestoneEvent';


describe('MilestoneEvent', () => {
  it('should render the props', () => {
    expect(render(
      <MilestoneEvent
        image="image.png"
        title="pew pew pew"
        color="blue"
      />
    )).toMatchSnapshot();
  });

});
