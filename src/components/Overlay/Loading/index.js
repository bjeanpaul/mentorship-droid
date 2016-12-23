import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import BackAndroid from 'BackAndroid';

import { BaseView, SpinningImage, Header, HeaderIcon, Text } from 'src/components';
import styles from 'src/components/Overlay/Loading/styles';


class LoadingOverlay extends Component {
  constructor(props) {
    super(props);
    this.onNativeBackPress = this.onNativeBackPress.bind(this);
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.onNativeBackPress);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.onNativeBackPress);
  }

  onNativeBackPress() {
    return true;
  }

  render() {
    const {
      title,
      onDismissPress,
    } = this.props;

    return (
      <BaseView style={styles.base}>
        <Header style={styles.header}>
          {
            onDismissPress && <HeaderIcon
              uid="dismiss"
              type={HeaderIcon.types.dismissLight}
              onPress={onDismissPress}
            />
          }
        </Header>

        <View style={styles.body}>
          <SpinningImage />
          <Text style={styles.title}>{title}</Text>
        </View>
      </BaseView>
    );
  }
}


LoadingOverlay.propTypes = {
  title: PropTypes.string.isRequired,
  onDismissPress: PropTypes.func,
};


export default LoadingOverlay;
