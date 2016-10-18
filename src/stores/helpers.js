import moment from 'moment';
import { values, isUndefined, sortBy, filter, first } from 'lodash';


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


// TODO sort?
export const getCategories = ({ entities: { categories } }) => values(categories);


// TODO sort?
export const getCategoryActivities = ({
  entities: { activities },
}, targetCategoryId) => (
  values(activities)
    .filter(({ category }) => category === targetCategoryId));


export const getCategory = ({ entities: { categories } }, id) => categories[id];


export const getActivity = ({ entities: { activities } }, id) => activities[id];


export const getScheduledCalls = ({ entities: { scheduledCalls } }) => values(scheduledCalls);


export const getScheduledCall = ({ entities: { scheduledCalls } }, id) => scheduledCalls[id];


export const getScheduledCallActivity = (state, id) => {
  const scheduledCall = getScheduledCall(state, id);
  return scheduledCall && scheduledCall.activity && getActivity(state, scheduledCall.activity);
};


export const getEvents = ({ entities: { events } }) => values(events);


export const getActivityCallNotes = ({ entities: { callNotes } }, targetActivityId) => (
  values(callNotes).filter(({ callActivityId }) => callActivityId === targetActivityId));


export const getCallNotes = ({
  entities: { callNotes },
}) => sortBy(callNotes, ({ callStartTime }) => +moment(callStartTime));


export const getCall = ({ entities: { calls } }, id) => calls[id];


export const getCallNote = ({ entities: { callNotes } }, id) => callNotes[id];


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
