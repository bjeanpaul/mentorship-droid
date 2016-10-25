#!/bin/sh
set -e

release() {
  ./utils/build.sh $APK
  ./utils/bundle.sh
  TAG=$TRAVIS_TAG SENTRY_URL=$SENTRY_URL SENTRY_TOKEN=$SENTRY_TOKEN ./utils/sentry-upload-artefacts.sh
}

APK=$TRAVIS_TAG.apk ENVFILE=.env.prd SENTRY_URL=$SENTRY_PRD_URL SENTRY_TOKEN=$SENTRY_PRD_TOKEN release

APK=$TRAVIS_TAG.qa.apk ENVFILE=.env.qa SENTRY_URL=$SENTRY_QA_URL SENTRY_TOKEN=$SENTRY_QA_TOKEN release
