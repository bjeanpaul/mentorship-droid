import React, { Component } from 'react';
import { View, Image, CameraRoll, StyleSheet, ScrollView} from 'react-native';

import { Text, Heading, Button } from 'src/components';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    imageGrid: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    image: {
      width: 100,
      height: 100,
      margin: 10,
    },
});

class CameraRollPicker extends Component {

  constructor(props, context) {
    super(props);
    this.state = {
      photos: [],
    };

    this.nextPath = '/profile-picture';
    this.context = context;
  }

  componentDidMount() {
    CameraRoll.getPhotos({ first: 25 }).then((data) => {
      this.setState({ photos: data.edges.map((asset) => asset.node.image) });
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.imageGrid}>
          {this.state.photos.map((photo, index) =>
            <Image
              key={`photo-${index}`}
              source={{ uri: photo.uri }}
              style={styles.image}
            />
          )}
        </View>
      </ScrollView>
    );
  }
}
CameraRollPicker.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default CameraRollPicker;
