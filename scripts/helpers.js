import { normalize } from 'normalizr';
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


export const fakeProfileData = (overrides = {}) => normalize({
  id: 23,
  username: 'foo',
  ...overrides,
}, Profile);
