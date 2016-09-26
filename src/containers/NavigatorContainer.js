import { fromPairs } from 'lodash';
import { connect } from 'react-redux';

import Navigator from 'src/views/Navigator';
import routes from 'src/routes';
import * as constants from 'src/constants/navigation';
import { navTabEntered } from 'src/actions/navigation';


export const mapStateToProps = ({
  navigation: {
    journey,
    activities,
    scheduledCalls,
  },
}) => ({
  routes,
  navigationStates: fromPairs([
    [constants.NAV_TAB_ACTIVITIES, activities],
    [constants.NAV_TAB_JOURNEY, journey],
    [constants.NAV_TAB_SCHEDULED_CALLS, scheduledCalls],
  ]),
});

const tabToTabEntered = fromPairs([
  [constants.NAV_TAB_JOURNEY, constants.NAV_TAB_JOURNEY_ENTERED],
]);

export const mapDispatchToProps = ({
  onTabChanged: tab => navTabEntered(tabToTabEntered[tab]),
});


export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
