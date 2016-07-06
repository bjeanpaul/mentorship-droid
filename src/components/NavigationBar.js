import React from 'react';
import { View } from 'react-native';
import { Back, Link } from 'react-router-native';

import { Button } from 'src/components';

const NavigationBar = ({
  nextTextLabel = 'NEXT',
  nextEnabled = false,
  to = '',
  backEnabled = true,
}) => {
  let backButton = <Button style={{ width: 56, marginRight: 16 }}>←</Button>;
  if (backEnabled) {
    backButton = <Back>{ backButton }</Back>;
  }
  let nextButton = (
    <Button
      color={ nextEnabled ? undefined : '#dfe5e6' }
      style={{ flex: 1, marginLeft: 0 }}
    >
      { nextTextLabel }
    </Button>);
  if (nextEnabled && to) {
    nextButton = <Link to={to} style={{ flex: 1 }}>{ nextButton }</Link>;
  }

  return (
    <View style={{
      flexDirection: 'row',
    }}
    >
      { backButton }
      { nextButton }
    </View>
  );
};
NavigationBar.propTypes = {
  nextTextLabel: React.PropTypes.string,
  nextEnabled: React.PropTypes.bool,
  to: React.PropTypes.string.isRequired,
  backEnabled: React.PropTypes.bool,
};

export default NavigationBar;
