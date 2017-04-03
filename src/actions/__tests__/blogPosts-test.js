jest.mock('src/api/blogPosts');

import * as constants from 'src/constants/blogPosts';
import * as api from 'src/api';
import * as actions from 'src/actions/blogPosts';
import { dataAction } from 'src/actionHelpers';
import { testApiAction } from 'app/scripts/helpers';

const { ApiResponseError } = api;


describe('actions/callNotes', () => {
  describe('listBlogPosts', () => {
    it('should create actions for blog post api lists', async () => {
      await testApiAction(actions.listBlogPosts, {
        method: api.listBlogPosts,
        request: constants.BLOG_POST_LIST_REQUEST,
        success: dataAction(constants.BLOG_POST_LIST_SUCCESS),
        failures: [[ApiResponseError, constants.BLOG_POST_LIST_FAILURE]],
      })();
    });
  });

  describe('chooseBlogPost', () => {
    it('should create actions for choosing a blog post', () => {
      expect(actions.chooseBlogPost(21))
        .toEqual({
          type: constants.BLOG_POST_CHOOSE,
          payload: { id: 21 },
        });
    });
  });
});
