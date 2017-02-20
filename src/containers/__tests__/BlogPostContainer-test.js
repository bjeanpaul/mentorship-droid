import { fakeState, fakeBlogPost } from 'app/scripts/helpers';
import { mapStateToProps } from 'src/containers/BlogPostContainer';


describe('BlogPostContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide the relevant blog post', () => {
      const state = fakeState();
      const blogPost = fakeBlogPost({ id: 23 });

      state.entities = {
        blogPosts: {
          23: blogPost,
        },
      };

      expect(mapStateToProps(state, { blogPostId: 23 }))
        .toEqual(jasmine.objectContaining({ blogPost }));
    });
  });
});
