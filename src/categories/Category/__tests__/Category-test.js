import React from 'react';
import Category from 'src/categories/Category';


describe('Category', () => {
  function createComponent(props = {}) {
    return (
      <Category
        category={{
          id: 1,
          title: 'Connect',
          color: '#c4cd39',
        }}
        {...props}
      />
    );
  }

  it('should render', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });
});
