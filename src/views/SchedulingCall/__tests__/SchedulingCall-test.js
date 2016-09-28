import React from 'react';
import SchedulingCall from 'src/views/SchedulingCall';


describe('SchedulingCall', () => {
  it('should render', () => {
    const el = render(<SchedulingCall />);
    expect(el).toMatchSnapshot();
  });
});
