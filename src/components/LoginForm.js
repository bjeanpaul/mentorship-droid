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
  onSubmitPress,
  isLoggingIn,
  isAuthenticated,
  onAuthenticated,
  errorMessage = ''
}) => {

  let username = defaultUsername
  let password = defaultPassword
  let progressBarPartial = isLoggingIn ? <ProgressBar styleAttr="Horizontal" /> : null
  let errorMessagePartial = errorMessage ? <Text>{errorMessage}</Text> : null

  if (isAuthenticated) {
    onAuthenticated()
  }



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

        {errorMessagePartial}

        <TouchableHighlight onPress={() => {
          onSubmitPress(username, password)
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
  errorMessage: PropTypes.string,
  onSubmitPress: PropTypes.func.isRequired,


  isAuthenticated: PropTypes.bool.isRequired,
  onAuthenticated: PropTypes.func.isRequired,



}

const mapStateToProps = (state, ownProps) => {
  return {
    defaultUsername: state.user.username,
    defaultPassword: state.user.password,
    isLoggingIn: state.auth.isLoggingIn,
    isAuthenticated: state.auth.hash ? true : false,
    onAuthenticated: ownProps.onAuthenticated,
    errorMessage: state.auth.errorMessage
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmitPress: (username, password) => {
      dispatch(login(username, password))
    }
  }
}

const LoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView)




export default LoginForm
