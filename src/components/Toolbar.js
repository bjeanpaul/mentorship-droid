import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';


const styles = StyleSheet.create({
  header: {
  },
  title: {
    marginTop: 23,
    marginBottom: 25,
    fontSize: 20,
    fontFamily: 'Brandon Text_medium',
    color: '#003035',
  },
});

class Toolbar extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.title = props.title;
  }

  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>{this.title}</Text>
      </View>
    );
  }
}
Toolbar.propTypes = {
  title: React.PropTypes.string,
};

export default Toolbar;
