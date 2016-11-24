import { merge, uniqueId, isFunction } from 'lodash';
import { normalize, arrayOf } from 'normalizr';
import { Profile, ScheduledCall, Activity, Category, Event, CallNote } from 'src/api';
import { getContext } from 'src/stores/helpers';
import { staticAction } from 'src/actionHelpers';
import { createStack } from 'src/navigationHelpers';
import { EVENT_TYPE_SCHEDULED_CALL_CREATED } from 'src/constants/event';


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


const castActionCreator = obj => !isFunction(obj)
  ? staticAction(obj)
  : obj;


const testApiActionSuccess = async (actionFn, conf, args) => {
  const {
    method,
    request,
    success,
    response = { fake: 'data' },
    state = fakeState(),
    context = fakeContext(),
  } = conf;

  method.mockClear();
  method.mockImplementation(() => Promise.resolve(response));

  expect(await capture(actionFn(...args), context, () => state)).toEqual([
    castActionCreator(request)(...args),
    castActionCreator(success)(response, ...args),
  ]);
};


const testApiActionFailure = async (Type, failure, actionFn, conf, args) => {
  const {
    method,
    request,
    state = fakeState(),
    context = fakeContext(),
  } = conf;

  const e = new Type();

  method.mockClear();
  method.mockImplementation(() => Promise.reject(e));

  expect(await capture(actionFn(...args), context, () => state)).toEqual([
    castActionCreator(request)(...args),
    castActionCreator(failure)(e, ...args),
  ]);
};


export const testApiAction = (actionFn, conf) => async (...args) => {
  await testApiActionSuccess(actionFn, conf, args);
  const { failures = [] } = conf;

  for (const [Type, failure] of failures) {
    await testApiActionFailure(Type, failure, actionFn, conf, args);
  }
};


export const fakeProfileData = (data = { id: 23 }) => (
  normalize(data, Profile));


export const fakeScheduledCallData = (data = { id: 23 }) => (
  normalize(data, ScheduledCall));


export const fakeProfileListData = (data = [{ id: 23 }]) => (
  normalize(data, arrayOf(Profile)));


export const fakeScheduledCallListData = (data = [{ id: 23 }]) => (
  normalize(data, arrayOf(ScheduledCall)));


export const fakeCategoryListData = (data = [fakeCategory()]) => (
  normalize(data, arrayOf(Category)));


export const fakeActivityListData = (data = [fakeActivity()]) => (
  normalize(data, arrayOf(Activity)));


export const fakeCallNoteData = (data = fakeCallNote()) => (
  normalize(data, CallNote));


export const fakeListEventsData = (data = [fakeEvent()]) => (
    normalize(data, arrayOf(Event)));


export const fakeListCallNotesData = (data = [fakeCallNote()]) => (
    normalize(data, arrayOf(CallNote)));
