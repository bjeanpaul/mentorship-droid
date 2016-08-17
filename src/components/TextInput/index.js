import React, { PropTypes } from 'react';
import { View, TextInput as RNTextInput } from 'react-native';
import Label from 'src/components/Label';
import styles from './styles';


export default class TextInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  render() {
    let label;
    if (this.props.label) {
      label = <Label title={this.props.label} style={styles.label} />;
    }

    return (
      <View
        style={[
          styles.container,
          this.state.selected && styles.containerSelected,
        ]}
      >
        {label}
        <RNTextInput
          {...this.props}
          style={styles.textInput}
          underlineColorAndroid="transparent"
          placeholderTextColor={colors.TEXT_INPUT_PLACEHOLDER_TEXT}
          onFocus={() => this.setState({ selected: true })}
          onBlur={() => this.setState({ selected: false })}
        />
      </View>
    );
  }
}
TextInput.propTypes = {
  label: PropTypes.string,
};
