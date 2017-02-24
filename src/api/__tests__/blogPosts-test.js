jest.mock('src/api/request');

import { identity } from 'lodash';
import { arrayOf } from 'normalizr';
import { fakeAuth } from 'app/scripts/helpers';
import request from 'src/api/request';
import { BlogPost } from 'src/api/schemas';
import { parseBlogPostListResults } from 'src/api/parse';
import { listBlogPosts } from 'src/api';


describe('api/blogPosts', () => {
  beforeEach(() => {
    request.mockImplementation(identity);
    request.mockClear();
  });

  describe('listBlogPosts', () => {
    it('should construct a request for listing blog posts', () => {
      expect(listBlogPosts(fakeAuth(), { foo: 23 })).toEqual({
        url: '/blog/',
        method: 'GET',
        schema: arrayOf(BlogPost),
        parse: parseBlogPostListResults,
        auth: fakeAuth(),
        params: { foo: 23 },
      });
    });
  });
});
