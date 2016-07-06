import React, { Component } from 'react';
import { View, Image, CameraRoll, StyleSheet, ScrollView} from 'react-native';
import { Link } from 'react-router-native';

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
      images: [],
    };

    this.context = context;
  }

  componentDidMount() {
    CameraRoll.getPhotos({ first: 25 }).then((data) => {
      this.setState({ images: data.edges.map((asset) => asset.node.image) });
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.imageGrid}>
          {this.state.images.map((image, index) =>
            <Link key={`image-${index}`} to={`profile-picture/?imageURI=${image.uri}`}>
              <Image source={{ uri: image.uri }} style={styles.image} />
            </Link>
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
