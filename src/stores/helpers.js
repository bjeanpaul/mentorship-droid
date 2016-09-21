import { values, isUndefined } from 'lodash';


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


export const getScheduledCall = ({ entities: { scheduledCalls } }, id) => scheduledCalls[id];


export const getScheduledCallActivity = (state, id) => {
  const scheduledCall = getScheduledCall(state, id);
  return scheduledCall && scheduledCall.activity && getActivity(state, scheduledCall.activity);
};


export const getEvents = ({ entities: { events } }) => values(events);
