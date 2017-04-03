import * as routes from 'src/constants/routes';
import * as blogPosts from 'src/constants/blogPosts';
import { push, createRoute } from 'src/navigationHelpers';


export default (state, action) => {
  switch (action.type) {
    case blogPosts.BLOG_POST_CHOOSE: {
      const { payload: { id: blogPostId } } = action;
      const route = createRoute(routes.ROUTE_BLOG_POST, { blogPostId });
      return push(state, route);
    }

    default:
      return state;
  }
};
