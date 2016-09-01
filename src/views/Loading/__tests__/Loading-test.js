import React from 'react';
import Loading from 'src/views/Loading';


describe('Loading', () => {
  it('should render', () => {
    const el = render(<Loading />);
    expect(el).toMatchSnapshot();
  });
});
