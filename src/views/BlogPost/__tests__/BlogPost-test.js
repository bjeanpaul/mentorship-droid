import React from 'react';

import BlogPost from 'src/views/BlogPost';
import { imageUrl } from 'src/api';
import { fakeBlogPost } from 'app/scripts/helpers';


describe('BlogPost', () => {
  function createComponent(props = {}) {
    return (
      <BlogPost
        blogPost={fakeBlogPost()}
        {...props}
      />
    );
  }

  it('should render', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });

  it('should handle rendering without an image', () => {
    expect(render(createComponent({
      blogPost: fakeBlogPost({
        image: imageUrl(null),
      }),
    }))).toMatchSnapshot();
  });
});
