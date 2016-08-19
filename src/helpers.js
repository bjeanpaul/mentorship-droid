import { find, isUndefined, omitBy, isNull } from 'lodash';


export const omitNulls = d => omitBy(d, isNull);


export const trap = (type, fn) => v => v instanceof type
  ? Promise.resolve(v).then(fn)
  : Promise.reject(v);


export const switchError = cases => (e, ...xargs) => {
  const [_type, fn] = find(cases, ([type]) => e instanceof type) || [];
  return !isUndefined(fn)
    ? Promise.resolve().then(() => fn(e, ...xargs))
    : Promise.reject(e);
};
