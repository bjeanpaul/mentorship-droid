import React from 'react';
import NotFound from 'src/components/NotFound';


describe('Not Found', () => {
  it('should render with a warning message', () => {
    expect(
      <NotFound />
    ).toMatchSnapshot();
  });

});
