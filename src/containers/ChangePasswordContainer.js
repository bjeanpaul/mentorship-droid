/* eslint-disable react/jsx-no-bind */
import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import {
  Header,
  Text,
  TextInput,
  Button,
} from 'src/components';


import { resetPassword } from 'src/actions/auth';

const ChangePassword = (
  {
    headerTitle = 'Change Password',
    buttonLabel = 'Change',
    onSubmitPress,
    isLoading,
    errorMessage = '',
  },
  context
) => {
  let password = '';
  let passwordRepeat = '';

  return (
    <View>
        <Header title={headerTitle} />

        <TextInput
          placeholder="Password"
          onChangeText={(text) => { password = text; }}
        />
        <TextInput
          placeholder="Repeat Password"
          onChangeText={(text) => { passwordRepeat = text; }}
        />

        <Button
          onPress={() => { onSubmitPress(password, passwordRepeat, context); }}
          label={buttonLabel}
        />

        <Text>{errorMessage}</Text>
    </View>
  );
};
ChangePassword.contextTypes = {
  router: PropTypes.object.isRequired,
};
ChangePassword.propTypes = {
  headerTitle: PropTypes.string,
  buttonLabel: PropTypes.string,
  onSubmitPress: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.string,
};


const mapStateToProps = function mapStateToProps(state) {
  return {
    authToken: state.auth.authToken,
  };
};


const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSubmitPress: (password, passwordRepeat, context) => {
      context.router.push('/hello');
      dispatch(resetPassword(password, passwordRepeat, () => {
      }));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePassword);
