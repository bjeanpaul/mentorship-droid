jest.mock('src/api/request');


import { identity } from 'lodash';
import { fakeAuth } from 'app/scripts/helpers';
import request from 'src/api/request';
import { createCall } from 'src/api';


describe('api/calls', () => {
  beforeEach(() => {
    request.mockImplementation(identity);
    request.mockClear();
  });

  describe('createCall', () => {
    it('should construct a request for creating a call', () => {
      expect(createCall({ fake: 'call' }, fakeAuth())).toEqual({
        url: '/call/',
        method: 'POST',
        data: { fake: 'call' },
        auth: fakeAuth(),
      });
    });
  });
});
