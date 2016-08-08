import React from 'react';
import { View } from 'react-native';

import { Button } from 'src/components';

const NavigationBar = ({
  nextTextLabel = 'NEXT',
  nextEnabled = false,
  to = '',
  backEnabled = true,
}) => {
  let backButton = <Button style={{ width: 56, marginRight: 16 }} label={'←'} />;
  let nextButton = (
    <View style={{ flex: 1 }}>
      <Button
        color={ nextEnabled ? undefined : '#999' }
        style={{ flex: 1, marginLeft: 0 }}
        label={nextTextLabel}
      />
    </View>
  );
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
