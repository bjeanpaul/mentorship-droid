import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

import { getCurrent } from 'src/navigationHelpers';
import { NotFound } from 'src/components';
import { DEVICE_WIDTH } from 'src/constants/styles';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: DEVICE_WIDTH * 2,
    flexDirection: 'row',
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

  // pop or backward navigation: rightward
  // push, forward navigation or some other change: leftward
  return prev.routes.length > 1 && currRoute === prev.routes[prev.index - 1]
    ? DIRECTION_RIGHTWARD
    : DIRECTION_LEFTWARD;
};


const getPositionInputs = direction => {
  switch (direction) {
    case DIRECTION_LEFTWARD:
      return [0, 1];

    case DIRECTION_RIGHTWARD:
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

  renderRoute({
    key,
    context,
  }) {
    const Route = this.props.routes[key] || NotFound;
    return <Route key={key} {...context} />;
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
