import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

import { getCurrent } from 'src/navigationHelpers';
import { DEVICE_WIDTH } from 'src/constants/styles';
import NotFound from 'src/components/NotFound';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: DEVICE_WIDTH * 2,
    flexDirection: 'row',
  },
  routeContainer: {
    flex: 1,
  },
});


const animatedStyles = position => ({
  transform: [{
    translateX: position.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -DEVICE_WIDTH],
    }),
  }],
});


const DURATION = 250;
const DIRECTION_LEFTWARD = 'DIRECTION_LEFTWARD';
const DIRECTION_RIGHTWARD = 'DIRECTION_RIGHTWARD';


const getDirection = (prev, curr) => {
  if (!prev || !curr) return null;

  const currRoute = getCurrent(curr);
  const prevRoute = getCurrent(prev);

  // if active route hasn't changed
  if (prevRoute.key === currRoute.key) return null;

  // pop or backward navigation: leftward
  // push, forward navigation or some other change: rightward
  return prev.routes.length > 1 && currRoute.key === prev.routes[prev.index - 1].key
    ? DIRECTION_LEFTWARD
    : DIRECTION_RIGHTWARD;
};


const getPositionInputs = direction => {
  switch (direction) {
    case DIRECTION_RIGHTWARD:
      return [0, 1];

    case DIRECTION_LEFTWARD:
      return [1, 0];

    default:
      return [null, null];
  }
};


class NavigationStack extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prev: null,
      curr: this.props.navigationState,
      position: new Animated.Value(0),
    };
  }

  componentWillReceiveProps({ navigationState: next }) {
    if (this.state.curr === next) return;
    const direction = getDirection(this.state.curr, next);
    const [from, to] = getPositionInputs(direction);
    if (direction) this.state.position.setValue(from);

    this.setState({
      prev: this.state.curr,
      curr: next,
    }, () => {
      if (direction) this.animate(to);
    });
  }

  animate(to) {
    Animated.timing(this.state.position, {
      duration: DURATION,
      toValue: to,
    }).start();
  }

  renderRoute({ key, context }) {
    const obj = this.props.routes[key];

    if (React.isValidElement(obj)) {
      return <View key={key} style={styles.routeContainer}>{obj}</View>;
    } else {
      const Route = obj || NotFound;
      return <Route key={key} {...context} />;
    }
  }

  renderAnimation(left, right) {
    const views = [left, right]
      .map(getCurrent)
      .map(this.renderRoute, this);

    return (
      <Animated.View style={[styles.container, animatedStyles(this.state.position)]}>
        {views}
      </Animated.View>
    );
  }

  render() {
    const {
      curr,
      prev,
    } = this.state;

    switch (getDirection(prev, curr)) {
      case DIRECTION_LEFTWARD:
        return this.renderAnimation(prev, curr);

      case DIRECTION_RIGHTWARD:
        return this.renderAnimation(curr, prev);

      default:
        return this.renderRoute(getCurrent(this.state.curr));
    }
  }
}


NavigationStack.propTypes = {
  routes: PropTypes.object.isRequired,
  navigationState: PropTypes.any.isRequired,
};


export default NavigationStack;
