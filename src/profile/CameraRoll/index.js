import React, { PropTypes } from 'react';
import { View, Image, CameraRoll, ScrollView, TouchableNativeFeedback } from 'react-native';
import { BaseView } from 'src/components';
import styles from './styles';


class CameraRollPicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      photos: this.props.initialPhotos || [],
    };
  }

  componentDidMount() {
    CameraRoll.getPhotos({ first: 25 }).then((data) => {
      this.setState({ photos: data.edges.map((asset) => asset.node.image.uri) });
    });
  }

  render() {
    return (
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.imageGrid}>
            {this.state.photos.map((photoPath, index) =>
                <TouchableNativeFeedback
                  key={index}
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
  initialPhotos: PropTypes.array,
  onPhotoPress: PropTypes.func.isRequired,
};

export default CameraRollPicker;
