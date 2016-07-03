import React, { Component } from 'react';
import { View, Image, CameraRoll, StyleSheet, ScrollView,
TouchableHighlight } from 'react-native';
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

  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
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
            <TouchableHighlight key={`image-${index}`}
              onPress={() => {
                console.log('1123213', this.router);
              }}
            >
              <Image source={{ uri: image.uri }} style={styles.image} />
            </TouchableHighlight>
          )}
        </View>
      </ScrollView>
    );
  }
}

export default CameraRollPicker;
