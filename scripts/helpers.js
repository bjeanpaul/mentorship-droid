import { uniqueId } from 'lodash';
import { normalize, arrayOf } from 'normalizr';
import { Profile, ScheduledCall } from 'src/api';


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


export const fakeAuth = () => ({
  email: 'a@b.org',
  password: '1337',
});


export const fakeContext = () => ({
  auth: fakeAuth(),
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


export const uidEquals = id => node => node.prop('uid') === id;


export const TEST_ICON = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/',
  '5/53/Emoji_u1f605.svg/128px-Emoji_u1f605.svg.png',
].join('\n');
