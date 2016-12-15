import { PixelRatio } from 'react-native';

import { imageUrl } from 'src/api';
import config from 'src/config';

const { API_BASE_URL } = config;


describe('imageUrl', () => {
  it('should support resizing', () => {
    const url = imageUrl('/foo.jpg')
      .resize(100, 200);

    const width = PixelRatio.getPixelSizeForLayoutSize(100);
    const height = PixelRatio.getPixelSizeForLayoutSize(200);

    expect(url.toString())
      .toEqual(`${API_BASE_URL}/foo.jpg?filter_spec=fill-${width}x${height}`);
  });

  it('should support stringifying', () => {
    expect(imageUrl('/foo.jpg').toString()).toEqual(`${API_BASE_URL}/foo.jpg`);
  });

  it('should simply return the url if it is falsy', () => {
    expect(imageUrl(null).toString()).toEqual(null);
  });

  describe('toSource', () => {
    it('should return a source descriptor', () => {
      expect(imageUrl('/foo.jpg').toSource()).toEqual({
        uri: imageUrl('/foo.jpg').toString(),
      });
    });
  });

  describe('exists', () => {
    it('should return whether the image url is truthy', () => {
      expect(imageUrl(null).exists()).toBe(false);
      expect(imageUrl('/foo.jpg').exists()).toBe(true);
    });
  });
});
