import React from 'react';
import CallScheduled from 'src/views/CallScheduled';


describe('CallScheduled', () => {
  it('should render', () => {
    const el = render(<CallScheduled />);
    expect(el).toMatchSnapshot();
  });
});
