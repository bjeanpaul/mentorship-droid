import { uniqueId } from 'lodash';
import { normalize, arrayOf } from 'normalizr';
import { Profile, ScheduledCall } from 'src/api';


export const capture = async (fn, ...xargs) => {
  const res = [];
  await fn(v => res.push(v), ...xargs);
  return res;
};


export const fakeAuth = () => ({
  email: 'a@b.org',
  password: '1337',
});


export const fakeContext = () => ({
  auth: fakeAuth()
});


export const fakeStore = {
  subscribe: () => {},
  dispatch: () => {},
  getState: () => {},
};


export const mock = () => {
  const __id = uniqueId();

  return (...args) => ({
    __id,
    args,
  });
};


export const fakeProfileData = (data = { id: 23 }) => (
  normalize(data, Profile));


export const fakeScheduledCallData = (data = { id: 23 }) => (
  normalize(data, ScheduledCall));


export const fakeProfileListData = (data = [{ id: 23 }]) => (
  normalize(data, arrayOf(Profile)));


export const fakeScheduledCallListData = (data = [{ id: 23 }]) => (
  normalize(data, arrayOf(ScheduledCall)));
