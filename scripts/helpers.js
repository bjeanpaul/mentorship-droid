import { merge, extend, uniqueId, range } from 'lodash';
import { normalize, arrayOf } from 'normalizr';
import { Profile, ScheduledCall, Activity, Category } from 'src/api';
import { getContext } from 'src/stores/helpers';
import { EVENT_TYPE_SCHEDULED_CALL_CREATED } from 'src/constants/event'


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
  ...data,
});


export const fakeEvent = data => ({
  id: 23,
  occuredAt: '2016-09-16T11:19:17.368442Z',
  eventType: EVENT_TYPE_SCHEDULED_CALL_CREATED,
  objectId: 23,
  description: 'First Call Scheduled',
  ...data,
});


export const fakeState = (overrides = {}) => merge({}, {
  auth: {
    profileId: 23,
    auth: fakeAuth(),
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
  },
}, overrides);


export const fakeContext = (overrides = {}) => merge(getContext(fakeState()), overrides);


export const fakeStore = {
  subscribe: () => {},
  dispatch: () => {},
  getState: () => {},
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
