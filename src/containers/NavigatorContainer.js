import { fromPairs } from 'lodash';
import { connect } from 'react-redux';

import Navigator from 'src/views/Navigator';
import routes from 'src/routes';
import * as constants from 'src/constants/navigation';


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


export default connect(mapStateToProps)(Navigator);
