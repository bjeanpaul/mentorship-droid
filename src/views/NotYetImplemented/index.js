import React, { PropTypes } from 'react';
import { BaseView, Header, HeaderIcon, Text } from 'src/components';


const NotYetImplemented = ({
  onDismissPress,
}) => (
  <BaseView>
    <Header>
      <HeaderIcon
        uid="dismiss"
        type={HeaderIcon.types.dismissLight}
        onPress={onDismissPress}
      />
    </Header>
    <Text>Sorry, implementation for this screen is yet to be completed.</Text>
  </BaseView>
);


NotYetImplemented.propTypes = {
  onDismissPress: PropTypes.func.isRequired,
};


export default NotYetImplemented;
