jest.mock('src/api/request');


import { identity } from 'lodash';
import { arrayOf } from 'normalizr';
import { fakeAuth } from 'app/scripts/helpers';
import request from 'src/api/request';
import { Category } from 'src/api/schemas';
import { parseCategory, parseCategoryListResults } from 'src/api/parse';

import {
  listCategories,
  getCategory,
} from 'src/api';


describe('api/category', () => {
  beforeEach(() => {
    request.mockImplementation(identity);
    request.mockClear();
  });

  describe('listCategories', () => {
    it('should construct a request for listing categories', () => {
      expect(listCategories(fakeAuth(), { foo: 23 })).toEqual({
        url: '/category/',
        method: 'GET',
        schema: arrayOf(Category),
        parse: parseCategoryListResults,
        auth: fakeAuth(),
        params: { foo: 23 },
      });
    });
  });

  describe('getCategory', () => {
    it('should construct a request for getting a category', () => {
      expect(getCategory(23, fakeAuth())).toEqual({
        url: '/category/23/',
        method: 'GET',
        parse: parseCategory,
        auth: fakeAuth(),
        schema: Category,
      });
    });
  });
});
