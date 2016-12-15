import { PixelRatio } from 'react-native';
import buildUrl from 'axios/lib/helpers/buildURL';

import config from 'src/config';

const { API_BASE_URL } = config;


class ImageUrl {
  constructor(url, params = {}) {
    this.url = url;
    this.params = params;
  }

  resize(relWidth, relHeight) {
    const width = PixelRatio.getPixelSizeForLayoutSize(relWidth);
    const height = PixelRatio.getPixelSizeForLayoutSize(relHeight);

    return new ImageUrl(this.url, {
      ...this.params,
      filter_spec: `fill-${width}x${height}`,
    });
  }

  exists() {
    return !!this.url;
  }

  toJSON() {
    return this.toString();
  }

  toString() {
    return this.exists()
      ? buildUrl(API_BASE_URL + this.url, this.params)
      : this.url;
  }

  toSource() {
    return { uri: this.toString() };
  }
}


const imageUrl = (...args) => new ImageUrl(...args);


export default imageUrl;
