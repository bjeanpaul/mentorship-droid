import React, {
  PropTypes,
  Component,
  LayoutAnimation,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';


class Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      height: 0,
    };
    this.toggle.bind(this);
  }

  toggle() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({
      height: this.state.height >= 400 ? 0 : 400,
    });
  }

  render() {
    if (this.state.height <= 0) { return null; }

    const items = [
      'Journal',
      'Curriculum',
      'Training',
      'Schedule',
      'Forum',
    ];

    return (
      <View style={{ height: this.state.height, backgroundColor: 'darkgrey' }}>
        {items.map((item, i) => {
          return (
            <TouchableHighlight key={i} onPress={(item) => this.props.onItemPress({ key: 'trainingList' }) }>
              <Text>{ item } </Text>
            </TouchableHighlight>
          );
        })}
      </View>
    );
  }
}
Menu.propTypes = {
  onItemPress: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Menu;
