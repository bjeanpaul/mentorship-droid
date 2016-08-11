jest.unmock('src/api/method');

import method from 'src/api/method';
import request from 'src/api/request';


describe('api/method', () => {
  it('should call request() with the definition function result', () => {
    request.mockReturnValue({ foo: 23 });

    const meth = method((a, b) => ({
      a,
      b,
    }));

    expect(meth('bar', 'baz')).toEqual({ foo: 23 });

    expect(request.mock.calls).toEqual([[{
      a: 'bar',
      b: 'baz',
    }]]);
  });

  it('should expose the definition function', () => {
    const definition = () => ({ foo: 23 });
    expect(method(definition).definition).toEqual(definition);
  });
});
