#!/bin/sh
set -e

cp $GOOGLE_SERVICES android/app/google-services.json

cd android
ENVFILE=$ENVFILE ./gradlew assembleRelease -PdisablePreDex
cd ..

rm android/app/google-services.json
mv android/app/build/outputs/apk/app-release.apk $1
