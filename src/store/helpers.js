import moment from 'moment';
import { values, isUndefined, sortBy, filter, first, orderBy } from 'lodash';

import { getCurrent } from 'src/navigationHelpers';
import { TYPES_TO_COLLECTIONS } from 'src/constants/events';


export const getAuthUserProfile = ({
  auth: { profileId },
  entities: { profiles },
}) => !isUndefined(profileId)
  ? profiles[profileId]
  : null;


export const getContext = state => {
  const { auth: { auth } } = state;

  return {
    auth,
    profile: getAuthUserProfile(state),
  };
};


export const getCategories = ({ entities }, opts = {}) => {
  const { omitHidden = false } = opts;
  let res = sortBy(values(entities.categories), 'ordinal');
  if (omitHidden) res = filter(res, { isHidden: false });
  return res;
};


export const getCategoryActivities = ({ entities }, targetCategoryId, opts = {}) => {
  const { omitHidden = false } = opts;

  let res = values(entities.activities)
    .filter(({ category }) => category === targetCategoryId);

  res = sortBy(res, 'ordinal');
  if (omitHidden) res = filter(res, { isHidden: false });

  return res;
};


export const getCategory = ({ entities: { categories } }, id) =>
  categories[id];


export const getActivity = ({ entities: { activities } }, id) =>
  activities[id];


export const getScheduledCalls = ({ entities: { scheduledCalls } }) =>
  values(scheduledCalls);


export const getScheduledCall = ({ entities: { scheduledCalls } }, id) =>
  scheduledCalls[id];


export const getScheduledCallActivity = (state, id) => {
  const scheduledCall = getScheduledCall(state, id);
  return scheduledCall
      && scheduledCall.activity
      && getActivity(state, scheduledCall.activity);
};


export const getActivityCallNotes = ({
  entities: { callNotes },
}, activityId) =>
  values(callNotes)
    .filter(({ callActivityId }) => callActivityId === activityId);


export const getCallNotes = ({
  entities: { callNotes },
}) =>
  sortBy(callNotes, ({ callStartTime }) => +moment(callStartTime));


export const getCalls = ({ entities: { calls } }) => values(calls);


export const getCall = ({ entities: { calls } }, id) => calls[id];


export const getCallNote = ({ entities: { callNotes } }, id) => callNotes[id];

// takes object of call notes indexed by callNote id
// returns an object of call notes indexed by call id
export const indexCallNotesByCallId = (callNotes) => {
  const reindexedCallNotes = {};
  Object.keys(callNotes).forEach((key) => {
    const callNote = callNotes[key];
    reindexedCallNotes[callNote.call] = callNote;
  });
  return reindexedCallNotes;
};

export const getCallsWithCallNotes = ({ entities: { calls, callNotes } }) => {
  const reindexedCallNotes = indexCallNotesByCallId(callNotes);

  return Object.keys(calls).map((key) => {
    return {
      call: calls[key],
      callNote: reindexedCallNotes[key] ? reindexedCallNotes[key] : null };
  });
};

export const getNextScheduledCall = (state, predicate = {}, time = Date.now()) => {
  let res = sortBy(getScheduledCalls(state), ({ callTime }) => +moment(callTime));
  res = res.filter(({ callTime }) => moment(callTime).isSameOrAfter(time));
  res = filter(res, predicate);
  return first(res);
};


export const getScheduledCallsBetween = (state, start, end, time = Date.now()) => {
  // for some reason, moment durations are behaving inconsistently in tests,
  // thus the lack of moment usage here
  const startTime = +moment(time) - start;
  const endTime = +moment(time) + end;

  return getScheduledCalls(state)
    .filter(({ callTime }) => {
      const t = +moment(callTime);
      return startTime <= t && t <= endTime;
    });
};


const getEventObject = (state, event) => {
  const collection = state.entities[TYPES_TO_COLLECTIONS[event.eventType]];
  return collection && collection[event.objectId];
};


// TODO return the associated entitites to make the containers' jobs easier
export const getEvents = (state) =>
  values(state.entities.events)
    .filter(event => getEventObject(state, event));


export const getMessages = ({ entities }) => []
  .concat(values(entities.messages))
  .concat(values(entities.pendingMessages));


export const getMessage = ({ entities }, id) => entities.messages[id];


export const getActiveTopRoute = store => getCurrent(store.navigation.top);


export const getBlogPost = ({ entities }, id) => entities.blogPosts[id];


export const getBlogPosts = ({ entities }) =>
  orderBy(entities.blogPosts, [({ createdAt }) => +moment(createdAt)], ['desc']);

// TODO get metadata info about call note 'time-relevance'
// query metadata
export const getCallNoteMetadata = ({ callNote: { metadata } }) => metadata;
