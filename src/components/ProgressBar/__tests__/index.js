import React from 'react';
import ProgressBar from 'src/components/ProgressBar';


describe('ProgressBar', () => {
  it('should render the progress bar at 50%', () => {
    expect(render(
      <ProgressBar completed={0.5} />
    )).toMatchSnapshot();
  });

  it('should render the progress bar at 100%', () => {
    expect(render(
      <ProgressBar completed={1} />
    )).toMatchSnapshot();
  });
});
