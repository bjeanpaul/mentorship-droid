import React from 'react';

import { imageUrl } from 'src/api';
import { fakeBlogPost } from 'app/scripts/helpers';
import BlogPostList from 'src/views/BlogPostList';


describe('BlogPostList', () => {
  function createComponent(props = {}) {
    return (
      <BlogPostList
        blogPosts={[
          fakeBlogPost({
            id: 1,
            title: 'Foo',
            thumbnail: imageUrl('/foo.png'),
          }),
          fakeBlogPost({
            id: 2,
            title: 'Bar',
            thumbnail: imageUrl('/bar.png'),
          }),
        ]}
        {...props}
      />
    );
  }

  it('should render', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });
});
