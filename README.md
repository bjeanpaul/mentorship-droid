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

`develop` is used for features currently in development, `master` for *production-ready* code.

### Hotfix releases

**Note:** these release branches are merged into both `master` *and* `develop`, so if you are merging any branches into the hotfix branch, make sure it is based off of `master` and **not** `develop`.

```
git flow hotfix start <version>
# make some commits or merge in PR's branch if changes are in different branch
./utils/version.sh <version>
git flow hotfix finish -p <version>
```

Depending on how much `develop` and `master` have diverged, some merge conflicts may need to be resolved with `develop`. If that is the case, you'll need to manually complete the hotfix release process:

```
# resolve merge conflicts on develop
git push origin develop
git push origin master
git push --tags
git branch -d hotfix/<version>
```

### Development releases

A `dev` suffix should be used for dev releases, starting at `-dev`, followed by `-dev1`, `dev2`, etc. For example: `0.2.0-dev1`.

```
# make relevant changes to `develop` branch (ideally via merging in feature branches)
./utils/dev-release.sh <version>
```

### Production releases

**Note:** This process should only be followed when the current changes on `develop` are to be merged into `master` and considered the new **production-ready** code.

```
git flow release start <version>
./utils/version.sh <version>
git flow release finish -p <version>
```
