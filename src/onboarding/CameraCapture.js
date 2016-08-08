import React, { Component } from 'react';
import Camera from 'react-native-camera';
import { View, Image, TouchableHighlight } from 'react-native';
import { Button } from 'src/components';


class CameraCapture extends Component {

  constructor(props) {
    super(props);

    this.state = {
      capturedImagePath: null,
    };
  }

  takePicture() {
    return this.camera.capture()
      .then((data) => {
        this.setState({
          capturedImagePath: data.path,
        });
      });
  }

  renderPreview() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'orange',
        }}
      >
        <Image
          style={{
            width: 200,
            height: 200,
            borderWidth: 1,
            borderColor: 'red',
          }}
        />
      </View>
    );
  }

  renderCapture() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Camera
            ref={ camera => { this.camera = camera; }}
            style={{ flex: 1 }}
            aspect={Camera.constants.Aspect.fill}
          />
        </View>
        <TouchableHighlight onPress={() => { this.takePicture(); }}>
          <Button>Take Photo</Button>
        </TouchableHighlight>
      </View>
    );
  }

  render() {
    if (this.state.capturedImagePath) {
      return this.renderPreview();
    } else {
      return this.renderCapture();
    }
  }
}

export default CameraCapture;
