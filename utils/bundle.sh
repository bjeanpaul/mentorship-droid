#!/bin/sh

react-native bundle \
  --dev false \
  --platform android \
  --entry-file index.android.js \
  --bundle-output main.jsbundle \
  --sourcemap-output main.jsbundle.map
