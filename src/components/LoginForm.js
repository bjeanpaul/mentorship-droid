import React, {
  Component,
  PropTypes,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native'


import ProgressBar from 'ProgressBarAndroid'

import { connect } from 'react-redux'
import { login } from '../actions/user'


const LoginView = ({
  defaultUsername,
  defaultPassword,
  onLogInPress,
  isLoggingIn
}) => {

  let username = defaultUsername
  let password = defaultPassword
  let progressBarPartial = isLoggingIn ? <ProgressBar styleAttr="Horizontal" /> : null

  return (
      <View>

        {progressBarPartial}

        <TextInput
          placeholder="Username"
          defaultValue={defaultUsername}
          onChangeText={(text) => { username = text}}
        />

        <TextInput
          placeholder="Password"
          onChangeText={(text) => { password = text}}
        />

        <TouchableHighlight onPress={() => {
          onLogInPress(username, password)
        }}>
          <View>
            <Text>Log In</Text>

          </View>
        </TouchableHighlight>
      </View>
  )
}

LoginView.propTypes = {
  defaultUsername: PropTypes.string,
  defaultPassword: PropTypes.string,
  onLogInPress: PropTypes.func.isRequired,
  isLoggingIn: PropTypes.bool.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    defaultUsername: state.user.username,
    defaultPassword: state.user.password,
    isLoggingIn: state.auth.loggingIn
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLogInPress: (username, password) => {
      dispatch(login(username, password))
    }
  }
}

const LoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView)




export default LoginForm
