/* eslint-disable react/jsx-no-bind */

import React, {
  Component,
  StatusBar,
  ToolbarAndroid,
  Navigator,
  View,
  Text,
} from 'react-native';

import Menu from './Menu';

import { TrainingListContainer } from '../containers/training';
import { TrainingDetail } from './training';
import { ScheduleListContainer } from '../schedule/ScheduleListContainer';

class NavigationDrawer extends Component {

  constructor(props) {
    super(props);

    this.renderScene.bind(this);
  }


  // TODO: I really hate that there's this global object that
  // needs to know about all of this.
  renderScene(route, navigator) {
    switch (route.key) {
      case 'scheduleList':
        return (
          <ScheduleListContainer />
        );
      case 'trainingList':
        return (
          <TrainingListContainer
            onRowPress={(module) => {
              navigator.push({ key: 'trainingDetail', module });
            }}
          />
        );
      case 'trainingDetail':
        return <TrainingDetail module={route.module} />;

      default:
        return <View><Text>No route matched.</Text></View>;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Menu
          onItemPress={(item) => {
            this.refs.navigator.replace(item);
            this.refs.menu.toggle();
          }}
          ref="menu"
        />
        <ToolbarAndroid
          navIcon={require('../../assets/navigationBar/menu.png')}
          logo={require('../../assets/navigationBar/logo.png')}
          onIconClicked={() => { this.refs.menu.toggle(); }}
          title="Test"
          style={{ backgroundColor: '#E9EAED', height: 56 }}
        />
        <Navigator
          ref="navigator"
          initialRoute={{ key: 'scheduleList' }}
          renderScene={this.renderScene}
        />
      </View>
    );
  }
}

export default NavigationDrawer;
