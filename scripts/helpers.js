import { merge, uniqueId, noop, isFunction } from 'lodash';
import { normalize, arrayOf } from 'normalizr';
import { getContext } from 'src/store/helpers';
import { staticAction } from 'src/actionHelpers';
import { createStack } from 'src/navigationHelpers';
import { EVENT_TYPE_SCHEDULED_CALL_CREATED } from 'src/constants/events';
import { MESSAGE_TYPE_INBOUND } from 'src/constants/messages';
import * as api from 'src/api';


export const capture = async (fn, ...xargs) => {
  const res = [];
  await fn(v => res.push(v), ...xargs);
  return res;
};


export const mock = () => {
  const __id = uniqueId();

  return (...args) => ({
    __id,
    args,
  });
};


export const uidEquals = id => node => node.prop('uid') === id;


export const fakeAuth = () => ({
  email: 'a@b.org',
  password: '1337',
});


export const fakeCategory = data => ({
  id: 1,
  title: 'Level',
  color: '#97c13c',
  about: 'touba',
  goal: 'laog',
  image: null,
  ...data,
});


export const fakeActivity = data => ({
  id: 1,
  title: 'Activity 3',
  instructions: 'snoitcrutsni',
  isComplete: false,
  lessonRationale: 'elanoitar',
  objective: 'raaar',
  prompts: 'tspmorp',
  reflectionPoints: 'tsnoip',
  skillsDeveloped: 'depoleved',
  icon: null,
  poster: null,
  category: 23,
  ...data,
});

export const fakeScheduledCall = data => ({
  id: 1,
  createdAt: '2016-09-16T11:27:25.454520Z',
  callTime: '2016-09-16T11:27:14Z',
  caller: 23,
  callee: 1,
  activity: null,
  ...data,
});


export const fakeProfile = data => ({
  id: 23,
  firstName: 'Rodger',
  ...data,
});


export const fakeCall = data => ({
  id: 20,
  scheduledCall: null,
  activity: null,
  ...data,
});


export const fakeEvent = data => ({
  id: 23,
  occuredAt: '2016-09-16T11:19:17.368442Z',
  eventType: EVENT_TYPE_SCHEDULED_CALL_CREATED,
  objectId: 23,
  description: 'Im a big fake',
  ...data,
});


export const fakeCallNote = data => ({
  id: 404,
  mentor: 23,
  call: 50,
  reflection: 'It went well',
  menteeState: 'sad',
  objectiveAchieved: false,
  activityHelpful: true,
  callQuality: 5,
  callActivity: 3,
  callStartTime: '2016-09-28T17:34Z',
  ...data,
});


export const fakeMessage = data => ({
  id: 21,
  direction: MESSAGE_TYPE_INBOUND,
  timestamp: '2016-11-30T09:43:20.311Z',
  content: 'Sputnik sickles found in the seats',
  details: {},
  ...data,
});


export const fakeState = (overrides = {}) => merge({}, {
  auth: {
    profileId: 23,
    auth: fakeAuth(),
  },
  callNote: {
    navigation: createStack(),
    callNote: {},
  },
  entities: {
    profiles: {
      23: fakeProfile({ id: 23 }),
    },
    categories: {
      21: fakeCategory({ id: 21 }),
    },
    activities: {
      2: fakeActivity({ id: 2 }),
    },
    events: {
      22: fakeEvent({ id: 22 }),
    },
    scheduledCalls: {
      23: fakeScheduledCall({ id: 23 }),
    },
    calls: {
      20: fakeCall({ id: 20 }),
    },
    callNotes: {
      100: fakeCallNote({ id: 100 }),
    },
  },
}, overrides);


export const fakeContext = (overrides = {}) => merge(getContext(fakeState()), overrides);


export const fakeStore = (state = fakeState()) => ({
  subscribe: () => {},
  dispatch: () => {},
  getState: () => state,
});


export const fakeProfileData = (data = { id: 23 }) => (
  normalize(data, api.Profile));


export const fakeScheduledCallData = (data = { id: 23 }) => (
  normalize(data, api.ScheduledCall));


export const fakeMessageData = (data = fakeMessage()) => (
    normalize(data, api.Message));


export const fakeProfileListData = (data = [{ id: 23 }]) => (
  normalize(data, arrayOf(api.Profile)));


export const fakeScheduledCallListData = (data = [{ id: 23 }]) => (
  normalize(data, arrayOf(api.ScheduledCall)));


export const fakeCategoryListData = (data = [fakeCategory()]) => (
  normalize(data, arrayOf(api.Category)));


export const fakeActivityListData = (data = [fakeActivity()]) => (
  normalize(data, arrayOf(api.Activity)));


export const fakeCallNoteData = (data = fakeCallNote()) => (
  normalize(data, api.CallNote));


export const fakeListEventsData = (data = [fakeEvent()]) => (
    normalize(data, arrayOf(api.Event)));


export const fakeListCallNotesData = (data = [fakeCallNote()]) => (
    normalize(data, arrayOf(api.CallNote)));


export const fakeListMessagesData = (data = [fakeMessage()]) => (
    normalize(data, arrayOf(api.Message)));


const castActionCreator = obj => !isFunction(obj)
  ? staticAction(obj)
  : obj;


const testApiActionCalls = async (actionFn, conf, args) => {
  const { method, context, getStore, expectedApiCalls } = conf;
  method.mockClear();
  await actionFn(...args)(noop, context, getStore);
  expect(method.mock.calls).toEqual(expectedApiCalls);
};


const testApiActionSuccess = async (actionFn, conf, args) => {
  const { method, response, request, success, context, getStore } = conf;

  method.mockClear();
  method.mockImplementation(() => Promise.resolve(response));

  expect(await capture(actionFn(...args), context, getStore)).toEqual([
    castActionCreator(request)(...args),
    castActionCreator(success)(response, ...args),
  ]);
};


const testApiActionFailure = async (Type, failure, actionFn, conf, args) => {
  const { method, request, context, getStore } = conf;
  const e = new Type();

  method.mockClear();
  method.mockImplementation(() => Promise.reject(e));

  expect(await capture(actionFn(...args), context, getStore)).toEqual([
    castActionCreator(request)(...args),
    castActionCreator(failure)(e, ...args),
  ]);
};


const testApiActionDefaults = args => {
  const context = fakeContext();

  return {
    context,
    failures: [],
    getStore: () => fakeState(),
    response: { fake: 'data' },
    expectedApiCalls: [args.concat(context.auth)],
  };
};


export const testApiAction = (actionFn, opts) => async (...args) => {
  const conf = {
    ...testApiActionDefaults(args),
    ...opts,
  };

  const { failures } = conf;

  await testApiActionCalls(actionFn, conf, args);
  await testApiActionSuccess(actionFn, conf, args);

  for (const [Type, failure] of failures) {
    await testApiActionFailure(Type, failure, actionFn, conf, args);
  }
};
