#!/bin/sh
set -e

release() {
  GOOGLE_SERVICES=$GOOGLE_SERVICES ENVFILE=$ENVFILE ./utils/build.sh $APK
  ./utils/bundle.sh
  TAG=$TRAVIS_TAG SENTRY_URL=$SENTRY_URL SENTRY_TOKEN=$SENTRY_TOKEN ./utils/sentry-upload-artefacts.sh
}

APK=mentorship-$TRAVIS_TAG.apk \
  ENVFILE=.env.prd \
  GOOGLE_SERVICES=google-services.prd.json \
  SENTRY_URL=$SENTRY_PRD_URL \
  SENTRY_TOKEN=$SENTRY_PRD_TOKEN release

APK=mentorship-$TRAVIS_TAG.qa.apk \
  ENVFILE=.env.qa \
  GOOGLE_SERVICES=google-services.qa.json \
  SENTRY_URL=$SENTRY_QA_URL \
  SENTRY_TOKEN=$SENTRY_QA_TOKEN \
  release
