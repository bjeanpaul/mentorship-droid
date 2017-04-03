import { noop } from 'lodash';
import React from 'react';

import { imageUrl } from 'src/api';
import { uidEquals, fakeBlogPost } from 'app/scripts/helpers';
import BlogPostList from 'src/views/BlogPostList';


describe('BlogPostList', () => {
  function createComponent(props = {}) {
    return (
      <BlogPostList
        onBlogPostPress={noop}
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

  it('should call onBlogPostPress when a blog post is pressed', () => {
    const onBlogPostPress = jest.fn();
    const el = shallow(createComponent({ onBlogPostPress }));

    el.findWhere(uidEquals('blogPosts:2'))
      .simulate('press');

    expect(onBlogPostPress.mock.calls).toEqual([[2]]);
  });
});
