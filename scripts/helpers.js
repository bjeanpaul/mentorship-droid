import { uniqueId } from 'lodash';
import { normalize, arrayOf } from 'normalizr';
import { Profile } from 'src/api';


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


export const mock = () => {
  const __id = uniqueId();

  return (...args) => ({
    __id,
    args,
  });
};


export const fakeProfileData = (data = { id: 23 }) => normalize(data, Profile);


export const fakeProfileListData = (data = [{ id: 23 }]) => normalize(data, arrayOf(Profile));
