import { arrayOf } from 'normalizr';

import request from 'src/api/request';
import { parseBlogPostListResults } from 'src/api/parse';
import { BlogPost } from 'src/api/schemas';


export const listBlogPosts = (auth, params = {}) => request({
  url: '/blog/',
  method: 'GET',
  schema: arrayOf(BlogPost),
  parse: parseBlogPostListResults,
  params,
  auth,
});
