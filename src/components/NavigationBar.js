import React from 'react';
import { View } from 'react-native';
import { Button } from 'src/components';

const NavigationBar = ({
  nextTextLabel = 'NEXT',
  nextEnabled = false,
}) => (
  <View style={{ flexDirection: 'row' }}>
    <Button
      style={{
        width: 56,
        marginRight: 16,
      }}
      label={'←'}
    />;

    <View style={{ flex: 1 }}>
      <Button
        color={nextEnabled ? null : '#999'}
        style={{
          flex: 1,
          marginLeft: 0,
        }}
        label={nextTextLabel}
      />
    </View>
  </View>
);

NavigationBar.propTypes = {
  nextTextLabel: React.PropTypes.string,
  nextEnabled: React.PropTypes.bool,
  to: React.PropTypes.string.isRequired,
  backEnabled: React.PropTypes.bool,
};

export default NavigationBar;
