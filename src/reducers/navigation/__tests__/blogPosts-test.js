import reduce from 'src/reducers/navigation/blogPosts';
import * as routes from 'src/constants/routes';
import * as blogPosts from 'src/actions/blogPosts';

import {
  createStack,
  createRoute,
  push,
} from 'src/navigationHelpers';


describe('src/reducers/navigation/blogPosts', () => {
  describe('BLOG_POST_CHOOSE', () => {
    it('should push on the blog post route', () => {
      expect(reduce(createStack(), blogPosts.chooseBlogPost(21)))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_BLOG_POST, {
          blogPostId: 21,
        })));
    });
  });
});
