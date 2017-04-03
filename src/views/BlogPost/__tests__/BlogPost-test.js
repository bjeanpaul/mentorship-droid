import { noop } from 'lodash';
import React from 'react';

import BlogPost from 'src/views/BlogPost';
import { imageUrl } from 'src/api';
import { uidEquals, fakeBlogPost } from 'app/scripts/helpers';


describe('BlogPost', () => {
  function createComponent(props = {}) {
    return (
      <BlogPost
        onBackPress={noop}
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

  it('should call onBackPress when back is pressed', () => {
    const onBackPress = jest.fn();
    const el = shallow(createComponent({ onBackPress }));

    el.findWhere(uidEquals('back'))
      .simulate('press');

    expect(onBackPress.mock.calls).toEqual([[]]);
  });
});
