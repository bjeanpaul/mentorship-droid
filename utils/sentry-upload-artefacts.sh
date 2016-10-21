#!/bin/sh
set -e

curl "$SENTRY_URL/releases/" \
  -X POST \
  -H "Authorization: Bearer $SENTRY_TOKEN" \
  -H 'Content-Type: application/json' \
  -d "{\"version\": \"$TAG\"}"


curl "$SENTRY_URL/releases/$TAG/files/" \
  -X POST \
  -H "Authorization: Bearer $SENTRY_TOKEN" \
  -F file=@main.jsbundle \
  -F name="/main.jsbundle"


curl "$SENTRY_URL/releases/$TAG/files/" \
  -X POST \
  -H "Authorization: Bearer $SENTRY_TOKEN" \
  -F file=@main.jsbundle.map \
  -F name="/main.jsbundle.map"


curl "$SENTRY_URL/releases/$TAG/files/" \
  -X POST \
  -H "Authorization: Bearer $SENTRY_TOKEN" \
  -F file=@main.jsbundle.meta \
  -F name="/main.jsbundle.meta"
