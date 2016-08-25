import React, { PropTypes } from 'react';
import { View, Image, CameraRoll, ScrollView, TouchableNativeFeedback } from 'react-native';
import styles from './styles';


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
        <ScrollView style={{ flex: 1 }}>
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
    );
  }
}

CameraRollPicker.propTypes = {
  onPhotoPress: PropTypes.func.isRequired,
  initialPhotos: PropTypes.array,
};

export default CameraRollPicker;
