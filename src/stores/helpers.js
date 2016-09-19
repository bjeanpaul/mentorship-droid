import moment from 'moment';
import { values, isUndefined } from 'lodash';
import { JOURNEY_EVENT_SCHEDULED_CALL_ICON } from 'src/constants/images';


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


const makeEvent = ({ type, date, icon, title, blurb }) => ({
    type,
    date,
    icon,
    title,
    blurb: blurb || moment(date).format('dddd Do, MMMM YYYY'),
});


export const mapScheduledCallEvent = (event, state) => {
  const {
    objectId: scheduledCallId,
    occuredAt : date,
    type,
  } = event;

  const scheduledCall = getScheduledCall(state, scheduledCallId);
  const activity = scheduledCall && scheduledCall.activity
    && getActivity(state, scheduledCall.activity);
  const icon = activity && activity.icon || JOURNEY_EVENT_SCHEDULED_CALL_ICON;

  return makeEvent({
    type,
    date,
    title: 'Call Scheduled',
    icon,
  });
}


export const getEvents = (state) => {

}
