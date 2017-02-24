import { fakeState, fakeBlogPost } from 'app/scripts/helpers';
import { mapStateToProps } from 'src/containers/BlogPostListContainer';


describe('BlogPostListContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide all visible blog posts', () => {
      const state = fakeState();

      const blogPost1 = fakeBlogPost({
        id: 1,
      });

      const blogPost2 = fakeBlogPost({
        id: 2,
        isHidden: true,
      });

      const blogPost3 = fakeBlogPost({
        id: 3,
      });

      state.entities = {
        blogPosts: {
          1: blogPost1,
          2: blogPost2,
          3: blogPost3,
        },
      };

      expect(mapStateToProps(state))
        .toEqual(jasmine.objectContaining({
          blogPosts: [blogPost1, blogPost3],
        }));
    });
  });
});
