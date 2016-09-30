import * as constants from 'src/constants/navigation';


export default (state = {
  activeTab: constants.NAV_TAB_JOURNEY,
}, action) => {
  switch (action.type) {
    case constants.NAV_TAB_CHANGE:
      return {
        activeTab: action.payload.tab,
      };
    default:
      return state;
  }
};
