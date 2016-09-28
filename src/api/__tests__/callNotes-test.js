jest.mock('src/api/request');


import { identity } from 'lodash';
import { arrayOf } from 'normalizr';
import { fakeAuth } from 'app/scripts/helpers';
import request from 'src/api/request';
import { CallNote } from 'src/api/schemas';
import { parseResults } from 'src/api/parse';

import {
  listCallNotes,
  createCallNote,
  updateCallNote,
  patchCallNote,
} from 'src/api';


describe('api/callNotes', () => {
  beforeEach(() => {
    request.mockImplementation(identity);
    request.mockClear();
  });

  describe('listCallNotes', () => {
    it('should construct a request for listing call notes', () => {
      expect(listCallNotes(fakeAuth(), { foo: 23 })).toEqual({
        url: '/call_note/',
        method: 'GET',
        schema: arrayOf(CallNote),
        parse: parseResults,
        auth: fakeAuth(),
        params: { foo: 23 },
      });
    });
  });

  describe('createCallNote', () => {
    it('should construct a request for creating a call note', () => {
      expect(createCallNote({ fake: 'callNote' }, fakeAuth())).toEqual({
        url: '/call_note/',
        method: 'POST',
        schema: CallNote,
        data: { fake: 'callNote' },
        auth: fakeAuth(),
      });
    });
  });

  describe('updateScheduledCall', () => {
    it('should construct a request for updating a scheduled call', () => {
      expect(updateCallNote(23, { fake: 'callNote' }, fakeAuth())).toEqual({
        url: '/call_note/23/',
        method: 'PUT',
        schema: CallNote,
        data: { fake: 'callNote' },
        auth: fakeAuth(),
      });
    });
  });

  describe('patchScheduledCall', () => {
    it('should construct a request for updating a scheduled call', () => {
      expect(patchCallNote(23, { fake: 'callNote' }, fakeAuth())).toEqual({
        url: '/call_note/23/',
        method: 'PATCH',
        schema: CallNote,
        data: { fake: 'callNote' },
        auth: fakeAuth(),
      });
    });
  });
});
