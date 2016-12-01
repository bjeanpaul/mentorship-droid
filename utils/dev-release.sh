#!/bin/sh
git checkout support/dev
git merge develop
./utils/version.sh "$1"
git push origin support/dev
git push --tags
git checkout develop
