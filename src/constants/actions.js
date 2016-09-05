// TODO: Consider renaming this to something more descriptive.
import { PROFILE_FETCH_SUCCESS } from 'src/constants/profile';

import { AUTH_LOGIN_SUCCESS } from 'src/constants/auth';
import { EXISTING_USER_ENTER_SUCCESS } from 'src/constants/entry';

import {
  SCHEDULED_CALL_LIST_SUCCESS,
  SCHEDULED_CALL_CREATE_SUCCESS,
  SCHEDULED_CALL_FETCH_SUCCESS,
} from 'src/constants/profile';


const ACTIONS_WITH_ENTITIES = [
  AUTH_LOGIN_SUCCESS,
  PROFILE_FETCH_SUCCESS,
  EXISTING_USER_ENTER_SUCCESS,
  SCHEDULED_CALL_LIST_SUCCESS,
  SCHEDULED_CALL_CREATE_SUCCESS,
  SCHEDULED_CALL_FETCH_SUCCESS,
];


export {
  ACTIONS_WITH_ENTITIES,
};
