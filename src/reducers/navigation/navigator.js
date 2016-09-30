import * as constants from 'src/constants/navigation';


const tabs = [
  constants.NAV_TAB_ACTIVITIES,
  constants.NAV_TAB_CHAT,
  constants.NAV_TAB_COMMUNITY,
  constants.NAV_TAB_JOURNEY,
  constants.NAV_TAB_SCHEDULED_CALLS,
];

export default (state = {
  activeTab: constants.NAV_TAB_JOURNEY,
}, action) => {
  if (tabs.indexOf(action.type) !== -1) {
    return { activeTab: action.type };
  }
  return state;
};
