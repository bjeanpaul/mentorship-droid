# MENTOR TOGETHER #

This app is built with React Native, targetting Android.

## Setup ##

Follow the [Android setup steps](http://facebook.github.io/react-native/releases/0.28/docs/getting-started.html#content)
for React Native.

You should end up installing `node`, `watchman`, `react-native-cli`, and
`Android Studio`.

Once you're done installing React Native's dependencies then run `npm install`,
to install our projects dependencies.

```
> react-native run-android
```

Starts React Native's packager, builds the Android application and runs it
on your _Android Virtual Device._

## Debugging ##

`> npm run logs`

## Tests ##

`> npm test`


## Automatic Builds ##

Are added to the GitHub repo whenever a new tag is pushed.

## Release process

### Hotfix releases
```
git flow hotfix start <version>
# make some commits or merge in PR's branch if changes are in different branch
./utils/version.sh <version>
git flow hotfix finish -p <version>
```

### Development releases
A `dev` suffix should be used for dev releases, starting at `-dev`, followed by `-dev1`, `dev2`, etc. For example: `0.2.0-dev1`.

```
# make relevant changes to `develop` branch (ideally via merging in feature branches)
./utils/dev-release.sh <version>
```
