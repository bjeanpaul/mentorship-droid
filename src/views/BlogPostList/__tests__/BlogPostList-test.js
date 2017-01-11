import React from 'react';

import BlogPostList from 'src/views/BlogPostList';


describe('BlogPostList', () => {
  function createComponent(props = {}) {
    return (
      <BlogPostList
        {...props}
      />
    );
  }

  it('should render', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });
});
