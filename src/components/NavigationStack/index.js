import { includes } from 'lodash';
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
  slide: {
    width: DEVICE_WIDTH,
  },
  slideIsHidden: {
    width: 0,
  },
  route: {
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
  return prev.index > 0 && currRoute.key === prev.routes[prev.index - 1].key
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

    // active route hasn't changed, we dont need to do any transition
    if (!direction) return;

    const [from, to] = getPositionInputs(direction);
    if (direction) this.state.position.setValue(from);

    this.setState({
      prev: this.state.curr,
      curr: next,
    }, () => {
      if (direction) this.animate(to);
    });
  }

  getShownRoutes() {
    const {
      curr,
      prev,
    } = this.state;

    let res;

    switch (getDirection(prev, curr)) {
      case DIRECTION_LEFTWARD:
        res = [curr, prev];
        break;

      case DIRECTION_RIGHTWARD:
        res = [prev, curr];
        break;

      default:
        res = [curr];
        break;
    }

    return res.map(getCurrent);
  }

  getRoutesExcluding(excludes) {
    const keys = excludes.map(({ key }) => key);
    return this.state.curr.routes
      .filter(route => !includes(keys, route.key));
  }

  getSlides() {
    const shownRoutes = this.getShownRoutes();

    const hidden = this.getRoutesExcluding(shownRoutes)
      .map(route => ({
        route,
        isHidden: true,
      }));

    const shown = shownRoutes
      .map(route => ({
        route,
        isHidden: false,
      }));

    return []
      .concat(hidden)
      .concat(shown);
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
      return <View style={styles.routeContainer}>{obj}</View>;
    } else {
      const Route = obj || NotFound;
      return <Route {...context} />;
    }
  }

  renderSlide({ route, isHidden }) {
    return (
      <View
        key={route.key}
        uid={route.key}
        style={[styles.slide, isHidden && styles.slideIsHidden]}
      >
        {this.renderRoute(route)}
      </View>
    );
  }

  render() {
    return (
      <Animated.View style={[styles.container, animatedStyles(this.state.position)]}>
        {this.getSlides().map(this.renderSlide, this)}
      </Animated.View>
    );
  }
}


NavigationStack.propTypes = {
  routes: PropTypes.object.isRequired,
  navigationState: PropTypes.any.isRequired,
};


export default NavigationStack;
