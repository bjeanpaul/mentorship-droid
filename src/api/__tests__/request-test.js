jest.mock('axios');


import axios from 'axios';
import * as errors from 'src/api/errors';
import request, { imageData } from 'src/api/request';
import { Schema } from 'normalizr';
import { identity } from 'lodash';


describe('api/request', () => {
  describe('request', () => {
    beforeEach(() => {
      axios.mockClear();
      axios.mockReturnValue(Promise.resolve({ data: { result: {} } }));
    });

    it('should make requests using the given configuration', async () => {
      axios.mockReturnValue(Promise.resolve({ data: { bar: 23 } }));

      const res = await request({
        url: '/foo',
        method: 'GET',
      });

      expect(res).toEqual({ bar: 23 });

      expect(axios.mock.calls).toEqual([[
        jasmine.objectContaining({
          url: '/mentor-api/foo',
          method: 'GET',
        }),
      ]]);
    });

    it('should reject an api error response as an ApiResponseError', async () => {
      const httpErr = new Error();
      httpErr.message = 'o_O';
      httpErr.response = { status: 500 };

      axios.mockReturnValue(Promise.reject(httpErr));

      const err = await request({
        url: '/foo',
        method: 'GET',
      })
      .catch(identity);

      expect(err instanceof errors.ApiResponseError).toBe(true);
      expect(err.message).toEqual(httpErr.message);
      expect(err.response).toEqual(httpErr.response);
    });

    it('should reject a 403 response as an ApiAuthenticationError', async () => {
      const httpErr = new Error();
      httpErr.message = 'o_O';
      httpErr.response = { status: 403 };

      axios.mockReturnValue(Promise.reject(httpErr));

      const err = await request({
        url: '/foo',
        method: 'GET',
      })
      .catch(identity);

      expect(err instanceof errors.ApiAuthenticationError).toBe(true);
      expect(err.message).toEqual(httpErr.message);
      expect(err.response).toEqual(httpErr.response);
    });

    it('should reject a 404 response as an ApiNotFoundError', async () => {
      const httpErr = new Error();
      httpErr.message = 'o_O';
      httpErr.response = { status: 404 };

      axios.mockReturnValue(Promise.reject(httpErr));

      const err = await request({
        url: '/foo',
        method: 'GET',
      })
      .catch(identity);

      expect(err instanceof errors.ApiNotFoundError).toBe(true);
      expect(err.message).toEqual(httpErr.message);
      expect(err.response).toEqual(httpErr.response);
    });

    it('should support requests with json bodies', () => {
      request({
        url: '/foo',
        method: 'POST',
        data: { bar: 23 },
      });

      expect(axios.mock.calls).toEqual([[
        jasmine.objectContaining({
          data: { bar: 23 },
          headers: jasmine.objectContaining({
            'Content-Type': 'application/json',
          }),
        }),
      ]]);
    });

    it('should support query parameters', () => {
      request({
        url: '/foo',
        method: 'GET',
        params: { bar: 23 },
      });

      expect(axios.mock.calls).toEqual([[
        jasmine.objectContaining({ params: { bar: 23 } }),
      ]]);
    });

    it('should support auth', () => {
      request({
        url: '/foo',
        method: 'GET',
        auth: {
          email: 'a@b.c',
          password: 'bar',
        },
      });

      expect(axios.mock.calls).toEqual([[
        jasmine.objectContaining({
          auth: {
            username: 'a@b.c',
            password: 'bar',
          },
        }),
      ]]);
    });

    it('should support schemas', async () => {
      axios.mockReturnValue(Promise.resolve(Promise.resolve({ data: { id: 23 } })));

      const res = await request({
        url: '/foo',
        method: 'GET',
        schema: new Schema('bars'),
      });

      expect(res).toEqual({
        result: 23,
        entities: { bars: { 23: { id: 23 } } },
      });
    });

    it('should support a response data parse function', async () => {
      axios.mockReturnValue(Promise.resolve({ data: { bar: 23 } }));

      const res = await request({
        url: '/foo',
        method: 'GET',
        parse: ({ bar }) => bar,
      });

      expect(res).toEqual(23);
    });

    it('should support case normalizing', async () => {
      axios.mockReturnValue(Promise.resolve({
        data: {
          foo_bar: [{
            baz_quux: { corge_grault: 23 },
          }],
        },
      }));

      const res = await request({
        url: '/foo',
        method: 'GET',
        data: {
          garplyWaldo: {
            fredXxyyxx: [{
              lerpLarp: { loremWinrar: 21 },
            }],
          },
        },
      });

      expect(res).toEqual({
        fooBar: [{
          bazQuux: { corgeGrault: 23 },
        }],
      });

      expect(axios.mock.calls).toEqual([[
        jasmine.objectContaining({
          data: {
            garply_waldo: {
              fred_xxyyxx: [{
                lerp_larp: { lorem_winrar: 21 },
              }],
            },
          },
        }),
      ]]);
    });

    it('should support disabling of case normalizing', async () => {
      axios.mockReturnValue(Promise.resolve({
        data: { foo_bar: 23 },
      }));

      const res = await request({
        url: '/foo',
        method: 'GET',
        data: { garplyWaldo: 21 },
      });

      expect(res).toEqual({
        fooBar: 23,
      });

      expect(axios.mock.calls).toEqual([[
        jasmine.objectContaining({
          data: { garply_waldo: 21 },
        }),
      ]]);
    });
  });

  describe('imageData', () => {
    it('should construct form data with an image', () => {
      const d = imageData({
        path: '/foo',
        name: 'rar.png',
        type: 'image/png',
      });

      expect(d.getParts()).toEqual([
        jasmine.objectContaining({
          fieldName: 'image',
          uri: '/foo',
          name: 'rar.png',
          type: 'image/png',
        }),
      ]);
    });
  });
});
