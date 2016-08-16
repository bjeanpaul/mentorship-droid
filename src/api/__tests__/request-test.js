jest.unmock('src/api/request');

import axios from 'axios';
import request, { ApiResponseError } from 'src/api/request';
import { Schema } from 'normalizr';
import { identity } from 'lodash';


describe('api/request', () => {
  beforeEach(() => {
    axios.mockClear();
    axios.mockReturnValue(Promise.resolve({data: { result: {} }}));
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

  it('should reject api error responses as ApiResponseErrors', async () => {
    const httpErr = new Error();
    httpErr.message = 'o_O';
    httpErr.response = 'fake-response';

    axios.mockReturnValue(Promise.reject(httpErr));

    const err = await request({
      url: '/foo',
      method: 'GET',
    })
    .catch(identity);

    expect(err.message).toEqual(httpErr.message);
    expect(err.response).toEqual(httpErr.response);
  });

  it('should support requests with json bodies', () => {
    request({
      url: '/foo',
      method: 'POST',
      data: { bar: 23 },
    });

    expect(request.mock.calls).toEqual([[
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

  fit('support a response data parse function', async () => {
    axios.mockReturnValue(Promise.resolve({ data: { bar: 23 } }));

    const res = await request({
      url: '/foo',
      method: 'GET',
      parse: ({ bar }) => bar,
    });

    expect(res).toEqual(23);
  });
});
