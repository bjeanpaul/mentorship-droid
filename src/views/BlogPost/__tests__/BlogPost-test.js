import React from 'react';

import BlogPost from 'src/views/BlogPost';
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
});
