jest.mock('src/api/request');


import { identity } from 'lodash';
import { arrayOf } from 'normalizr';
import { fakeAuth } from 'app/scripts/helpers';
import request from 'src/api/request';
import { Message } from 'src/api/schemas';
import { listMessages } from 'src/api';


describe('api/activities', () => {
  beforeEach(() => {
    request.mockImplementation(identity);
    request.mockClear();
  });

  describe('listMessages', () => {
    it('should construct a request for listing chat messages', () => {
      expect(listMessages(fakeAuth(), { foo: 23 })).toEqual({
        url: '/chat_messages/',
        method: 'GET',
        schema: arrayOf(Message),
        auth: fakeAuth(),
        params: { foo: 23 },
      });
    });
  });
});
