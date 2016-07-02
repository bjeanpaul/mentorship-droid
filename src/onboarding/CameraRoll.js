import React, { Component } from 'react';
import { View, Image, TouchableHighlight, CameraRoll,
StyleSheet, ScrollView } from 'react-native';
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
    }
  }


  componentDidMount() {
    CameraRoll.getPhotos({
        first: 25,
    }).then((data) => {
      this.storeImages(data);
    });
  }

  storeImages(data) {
    const images = data.edges.map((asset) => asset.node.image);
    this.setState({ images });
  }

  logImageError(err) {
    console.log(err);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.imageGrid}>
          {this.state.images.map((image, index) =>
            <Link key={`image-${index}`} to={{ pathname: 'profile-picture', query: { uri: image.uri } }} >
              <Image source={{ uri: image.uri }} style={styles.image} />
            </Link>
          )}
        </View>
      </ScrollView>
    );
  }
}

export default CameraRollPicker;
