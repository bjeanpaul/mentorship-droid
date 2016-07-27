/* eslint-disable no-undef */
jest.unmock('../index');

import {
  generateActionTypes,
  filterActionTypes,
  generateActionCreators,
} from '../index';

describe('Helpers', () => {

  it('should generate action constants for fetch, create, update and delete by default', () => {
    const actionTypes = generateActionTypes('test');
    expect(actionTypes).toEqual({
      fetchRequest: 'TEST_FETCH_REQUEST',
      fetchSuccess: 'TEST_FETCH_SUCCESS',
      fetchFailure: 'TEST_FETCH_FAILURE',
      //
      createRequest: 'TEST_CREATE_REQUEST',
      createSuccess: 'TEST_CREATE_SUCCESS',
      createFailure: 'TEST_CREATE_FAILURE',
      //
      updateRequest: 'TEST_UPDATE_REQUEST',
      updateSuccess: 'TEST_UPDATE_SUCCESS',
      updateFailure: 'TEST_UPDATE_FAILURE',
      //
      deleteRequest: 'TEST_DELETE_REQUEST',
      deleteSuccess: 'TEST_DELETE_SUCCESS',
      deleteFailure: 'TEST_DELETE_FAILURE',
    });
  });

  it('should filter action types by operation', () => {
    const actionTypes = {
      fetchRequest: 'TEST_FETCH_REQUEST',
      fetchSuccess: 'TEST_FETCH_SUCCESS',
      fetchFailure: 'TEST_FETCH_FAILURE',
      deleteRequest: 'TEST_DELETE_REQUEST',
      deleteSuccess: 'TEST_DELETE_SUCCESS',
      deleteFailure: 'TEST_DELETE_FAILURE',
    };

    expect(filterActionTypes(actionTypes, 'delete')).toEqual(
      [
        'TEST_DELETE_REQUEST',
        'TEST_DELETE_SUCCESS',
        'TEST_DELETE_FAILURE',
      ]
    );
  });

  describe('action creators', () => {
    describe('based on `actionTypes`', () => {
      //
      it('should generate `fetch`', () => {
        const actionTypes = generateActionTypes('test', ['fetch']);
        const actionCreators = generateActionCreators({
          path: 'test-endpoint',
          actionTypes,
        });

        expect(actionCreators.fetch()).toEqual({
          url: 'http://example.org/test-endpoint/',
          type: '--generated fetch--',
          requestOpts: {},
          types: [
            'TEST_FETCH_REQUEST',
            'TEST_FETCH_SUCCESS',
            'TEST_FETCH_FAILURE',
          ],
        });
      });

      it('should generate `create`', () => {
        const actionTypes = generateActionTypes('test', ['create']);
        const actionCreators = generateActionCreators({
          path: 'test-endpoint',
          actionTypes,
        });

        expect(actionCreators.create({
          test: 'i am code.',
        })).toEqual({
          url: 'http://example.org/test-endpoint/',
          requestOpts: {
            method: 'POST',
            body: JSON.stringify({
              test: 'i am code.',
            }),
          },
          type: '--generated create--',
          types: [
            'TEST_CREATE_REQUEST',
            'TEST_CREATE_SUCCESS',
            'TEST_CREATE_FAILURE',
          ],
        });
      });

      it('should generate `update`', () => {
        const actionTypes = generateActionTypes('test', ['update']);
        const actionCreators = generateActionCreators({
          path: 'test-endpoint',
          actionTypes,
        });

        expect(actionCreators.update({
          id: '1',
          body: { test: 'i am code.' },
        })).toEqual({
          url: 'http://example.org/test-endpoint/1/',
          requestOpts: {
            method: 'PUT',
            body: JSON.stringify({
              test: 'i am code.',
            }),
          },
          type: '--generated update--',
          types: [
            'TEST_UPDATE_REQUEST',
            'TEST_UPDATE_SUCCESS',
            'TEST_UPDATE_FAILURE',
          ],
        });
      });
    });
  });
});
