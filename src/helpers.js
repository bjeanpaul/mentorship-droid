import moment from 'moment';
import convert from 'color-convert';
import { mergeAllWith, flattenDeep } from 'lodash/fp';

import {
  find,
  flow,
  isUndefined,
  omitBy,
  isNull,
  get,
  toPairs,
  fromPairs,
  iteratee,
  groupBy,
  orderBy,
} from 'lodash';


export const makeGradient = (start, end, length) => {
  if (length === 1) return [start];
  const s = convert.hex.rgb(start);
  const e = convert.hex.rgb(end);

  return Array.from({ length }, (v, i) => {
    const p = i / (length - 1);
    const r = s[0] + p * (e[0] - s[0]);
    const g = s[1] + p * (e[1] - s[1]);
    const b = s[2] + p * (e[2] - s[2]);
    return `#${convert.rgb.hex(r, g, b)}`;
  });
};


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


export const staticStatus = type => () => ({
  type,
});


export const dataStatus = type => details => ({
  type,
  details,
});


export const errorSink = (store, actions, fallback) => e =>
  Promise.resolve(e)
    .then(switchError(actions))
    .then(store.dispatch)
    .catch(fallback);


export const pipeline = fns => (v, ...args) =>
  fns.reduce((res, fn) => fn(res, ...args), v);


export const delegate = (path, mappings) => {
  const lookup = fromPairs(mappings);
  return props => lookup[get(props, path)](props);
};


export const formatDateRelatively = (date, ref = null) => moment(date).calendar(ref, {
  sameDay: '[Today]',
  nextDay: '[Tomorrow]',
  nextWeek: 'dddd',
  lastDay: '[Yesterday]',
  lastWeek: '[Last] dddd',
  sameElse: 'dddd, DD MMMM',
});


export const groupByDate = (items, unit, order, key) => {
  const keyFn = iteratee(key);
  let res;

  res = orderBy(items, [keyFn], [order]);

  res = groupBy(res, item => moment(keyFn(item))
    .startOf(unit)
    .toISOString());

  res = toPairs(res)
    .map(([date, groupItems]) => ({
      date,
      items: groupItems,
    }));

  return orderBy(res, ['date'], [order]);
};


const concatDefined = (a, b) => {
  if (isUndefined(a)) return b;
  if (isUndefined(b)) return a;
  return []
    .concat(a)
    .concat(b);
};


export const mergeStyles = flow([
  flattenDeep,
  mergeAllWith(concatDefined),
]);
