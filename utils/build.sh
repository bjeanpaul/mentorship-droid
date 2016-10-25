#!/bin/sh
set -e

cd android
ENVFILE=$ENVFILE ./gradlew assembleRelease -PdisablePreDex
cd ..
mv android/app/build/outputs/apk/app-release.apk $1
