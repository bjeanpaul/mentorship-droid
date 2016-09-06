import { has } from 'lodash';
import { connect } from 'react-redux';

import { STACKS_TO_NAV_TABS } from 'src/constants/routes';
import { changeNavTab } from 'src/actions/navigation';
import Navigator from 'src/views/Navigator';


export const mapStateToProps = ({
  routes: { currentStack },
}, {
  hideNav,
  children,
}) => ({
  children,
  activeTab: !hideNav && has(STACKS_TO_NAV_TABS, currentStack)
    ? STACKS_TO_NAV_TABS[currentStack]
    : null,
});


export const propsToActions = {
  onTabPress: changeNavTab,
};


export default connect(mapStateToProps, propsToActions)(Navigator);
