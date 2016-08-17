import React from 'react';

import TextInput from 'src/components/TextInput';


export default class MultiLineTextInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      height: 0,
    };
  }

  render() {
    return (
      <TextInput
        multiline
        enablesReturnKeyAutomatically
        onChange={
          (event) => this.setState({
            height: event.nativeEvent.contentSize.height + 8,
          })
        }
        style={{ height: Math.max(28, this.state.height) }}
      />
    );
  }
}
