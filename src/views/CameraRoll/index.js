import React, { PropTypes } from 'react';
import { View, Image, CameraRoll, ScrollView, TouchableNativeFeedback } from 'react-native';

import { BaseView, Header, Text } from 'src/components';
import styles from 'src/views/CameraRoll/styles';


class CameraRollPicker extends React.Component {
  constructor(props) {
    super(props);

    const {
      initialPhotos = [],
    } = props;

    this.state = {
      photos: initialPhotos,
    };
  }

  componentDidMount() {
    return CameraRoll
      .getPhotos({ first: 25 })
      .then((data) => {
        this.setState({
          photos: this.state.photos
            .concat(data.edges.map((asset) => asset.node.image.uri)),
        });
      });
  }

  render() {
    return (
      <BaseView>
        <Header>
          <Text style={Text.types.title}>Choose a photo</Text>
        </Header>
        <View style={styles.body}>
          <ScrollView >
            <View style={styles.imageGrid}>
              {this.state.photos.map((photoPath, index) =>
                  <TouchableNativeFeedback
                    key={index}
                    photoId={index}
                    onPress={() => this.props.onPhotoPress(photoPath)}
                  >
                    <View style={styles.imageContainer}>
                      <Image
                        source={{ uri: photoPath }}
                        style={styles.image}
                      />
                    </View>
                  </TouchableNativeFeedback>
              )}
            </View>
          </ScrollView>
        </View>
      </BaseView>
    );
  }
}

CameraRollPicker.propTypes = {
  onPhotoPress: PropTypes.func.isRequired,
  initialPhotos: PropTypes.array,
};

export default CameraRollPicker;
