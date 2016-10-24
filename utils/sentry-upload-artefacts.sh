#!/bin/sh
set -e

bundle=android/app/src/main/assets/index.android.bundle
maps=android/app/src/main/assets/index.android.map

curl "$SENTRY_URL/releases/" \
  -X POST \
  -H "Authorization: Bearer $SENTRY_TOKEN" \
  -H 'Content-Type: application/json' \
  -d "{\"version\": \"$TAG\"}"


curl "$SENTRY_URL/releases/$TAG/files/" \
  -X POST \
  -H "Authorization: Bearer $SENTRY_TOKEN" \
  -F file=@$bundle \
  -F name="/$bundle"


curl "$SENTRY_URL/releases/$TAG/files/" \
  -X POST \
  -H "Authorization: Bearer $SENTRY_TOKEN" \
  -F file=@$maps \
  -F name="/$maps"
