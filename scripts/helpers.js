import { merge, extend, uniqueId } from 'lodash';
import { normalize, arrayOf } from 'normalizr';
import { Profile, ScheduledCall, Activity, Category } from 'src/api';
import { getContext } from 'src/stores/helpers';


export const capture = async (fn, ...xargs) => {
  const res = [];
  await fn(v => res.push(v), ...xargs);
  return res;
};


export const mock = () => {
  const __id = uniqueId();
  const fn = jest.fn();

  return (...args) => extend(fn, {
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
  topic: 'cipot',
  icon: null,
  poster: null,
  ...data,
});


export const fakeProfile = data => ({
  id: 23,
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
  },
}, overrides);


export const fakeContext = (overrides = {}) => getContext(fakeState(overrides));


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
