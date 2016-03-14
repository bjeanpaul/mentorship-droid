/* eslint-disable react/jsx-no-bind */

import React, {
  Component,
  DrawerLayoutAndroid,
  StatusBar,
  ToolbarAndroid,
  View,
  Text,
} from 'react-native';

class NavigationDrawer extends Component {

  // TODO: Put some actual navigation elements in here, perhaps
  // We should wrap this in a container; and let the container and the
  // store inform that.
  _renderNavigationView() {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
        <Text>4</Text>
        <Text>5</Text>
        <Text>6</Text>
        <Text>7</Text>
        <Text>8</Text>
        <Text>9</Text>
      </View>
    );
  }

  render() {
    const childrenComponents = this.props.children;
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={this._renderNavigationView}
        ref={(drawer) => { this.drawer = drawer; }}
      >
        <StatusBar backgroundColor="teal" />
        <ToolbarAndroid
          navIcon={require('../../assets/navigationBar/menu.png')}
          onIconClicked={() => this.drawer.openDrawer()}
          logo={require('../../assets/navigationBar/logo.png')}
          title="Test"
          style={{ backgroundColor: '#E9EAED', height: 56 }}
        />
        {childrenComponents}
      </DrawerLayoutAndroid>
    );
  }
}

export default NavigationDrawer;
