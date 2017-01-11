import * as api from 'src/api';
import * as constants from 'src/constants/blogPosts';

import {
  apiAction,
  dataAction,
  staticAction,
} from 'src/actionHelpers';

const { ApiResponseError } = api;


export const listBlogPosts = apiAction({
  method: api.listBlogPosts,
  request: staticAction(constants.BLOG_POST_LIST_REQUEST),
  success: dataAction(constants.BLOG_POST_LIST_SUCCESS),
  failures: [[ApiResponseError, staticAction(constants.BLOG_POST_LIST_FAILURE)]],
});
