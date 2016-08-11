jest.unmock('src/api/request');

import base64 from 'base-64';
import request, { ApiResponseError } from 'src/api/request';
import { Schema } from 'normalizr';
import { identity } from 'lodash';


describe('api/request', () => {
  beforeEach(() => {
    fetch.mockReturnValue(Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ result: {} }),
    }));
  });

  it('should make requests using the given configuration', async () => {
    fetch.mockReturnValue(Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ result: { bar: 23 } }),
    }));

    const res = await request({
      url: '/foo',
      method: 'GET',
    });

    expect(res).toEqual({ bar: 23 });

    expect(fetch.mock.calls).toEqual([[
      '/mentor-api/foo',
      jasmine.objectContaining({ method: 'GET' }),
    ]]);
  });

  it('should reject api error responses as ApiResponseErrors', async () => {
    const response = { ok: false };

    fetch.mockReturnValue(Promise.resolve(response));

    const err = await request({
      url: '/foo',
      method: 'GET',
    })
    .catch(identity);

    expect(err instanceof ApiResponseError).toBe(true);
    expect(err.response).toEqual(response);
  });

  it('should support requests with json bodies', () => {
    request({
      url: '/foo',
      method: 'POST',
      data: { bar: 23 },
    });

    expect(fetch.mock.calls).toEqual([[
      '/mentor-api/foo',
      jasmine.objectContaining({
        method: 'POST',
        data: JSON.stringify({ bar: 23 }),
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

    expect(fetch.mock.calls).toEqual([[
      '/mentor-api/foo?bar=23',
      jasmine.objectContaining({ method: 'GET' }),
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

    expect(fetch.mock.calls).toEqual([[
      '/mentor-api/foo',
      jasmine.objectContaining({
        headers: jasmine.objectContaining({
          Authorization: `Basic ${base64.encode('a@b.c:bar')}`,
        }),
      }),
    ]]);
  });

  it('should support schemas', async () => {
    fetch.mockReturnValue(Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ result: { id: 23 } }),
    }));

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
});
