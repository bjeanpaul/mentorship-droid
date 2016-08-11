jest.unmock('src/api/request');

import base64 from 'base-64';
import request from 'src/api/request';
import { Schema } from 'normalizr';


describe('api/request', () => {
  it('should make requests using the given configuration', async () => {
    fetch.mockReturnValue(Promise.resolve({
      json: () => ({ result: { bar: 23 } }),
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
      json: () => ({ result: { id: 23 } }),
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
