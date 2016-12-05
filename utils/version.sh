#!/bin/sh
npm version "$1"
git commit package.json -m "$1"
