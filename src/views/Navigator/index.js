import { map } from 'lodash';
import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';

import styles from './styles';
import { NavTabBar } from 'src/components';
import * as constants from 'src/constants/navigation';
import NavigationStack from 'src/components/NavigationStack';


const INITIAL_ACTIVE_TAB = constants.NAV_TAB_JOURNEY;


class Navigator extends Component {
  constructor(props) {
    super(props);
    const { initialActiveTab = INITIAL_ACTIVE_TAB } = props;

    this.state = {
      activeTab: initialActiveTab,
    };
  }

  onTabChange(tab) {
    this.setState({ activeTab: tab });
  }

  render() {
    return (
      <View style={styles.default}>
        {map(this.props.navigationStates, (navigationState, tab) => (
          this.state.activeTab === tab
            ? <NavigationStack
              key={tab}
              routes={this.props.routes}
              navigationState={this.props.navigationStates[tab]}
            />
            : null
        ))}

        <NavTabBar
          activeTab={this.state.activeTab}
          onTabPress={tab => this.onTabChange(tab)}
        />
      </View>
    );
  }
}


Navigator.propTypes = {
  routes: PropTypes.object.isRequired,
  navigationStates: PropTypes.object.isRequired,
  initialActiveTab: PropTypes.oneOf([
    constants.NAV_TAB_ACTIVITIES,
    constants.NAV_TAB_CHAT,
    constants.NAV_TAB_COMMUNITY,
    constants.NAV_TAB_JOURNEY,
    constants.NAV_TAB_SCHEDULED_CALLS,
  ]),
};


export default Navigator;
