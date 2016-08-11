jest
  .mock('isomorphic-fetch')
  .unmock('src/api/request');

import request from 'src/api/request';


describe('api/request', () => {
  it('should make requests using the given configuration', async () => {
    fetch.mockReturnValue(Promise.resolve({ json: () => ({ bar: 23 }) }));

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

  it('should support requests with json bodies', async () => {
    await request({
      url: '/foo',
      method: 'POST',
      data: { bar: 23 },
    });

    expect(fetch.mock.calls).toEqual([[
      '/mentor-api/foo',
      jasmine.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({ bar: 23 }),
      }),
    ]]);
  });
});
