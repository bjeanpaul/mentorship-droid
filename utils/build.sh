#!/bin/sh
set -e

cd android
./gradlew assembleRelease -PdisablePreDex
cd ..
mv android/app/build/outputs/apk/app-release.apk $1
