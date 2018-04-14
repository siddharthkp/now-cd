<p align="center">
  <img src="https://user-images.githubusercontent.com/1863771/38306070-ebde452e-382c-11e8-8234-923167cc7566.png" height="200px"/>
  <br><br>
  <b>Staging instances with now + travis</b>
  <br><br>
</p>

&nbsp;

Each pull request gets it's own deployment instance `https://{author}-{repo}-{branch-name}.now.sh`

This is updated on every commit to the matching pull request.

The master branch is deployed on `https://{author}-{repo}.now.sh`

&nbsp;

#### install

You need 2 tokens for `now-cd` to work

1. now API token

    You can generate a token from [account/tokens](https://zeit.co/account/tokens). Call it `NOW_CD_TOKEN`

2. Github API token

    You can generate a token from [settings/tokens/new](https://github.com/settings/tokens/new), call it `NOW_CD_GITHUB_TOKEN`

Now set these in travis repository settings [This is how](https://docs.travis-ci.com/user/environment-variables/#Defining-Variables-in-Repository-Settings).

&nbsp;

#### usage

add this to `.travis.yml`:

```yml
after_success:
  - npx now-cd
```

&nbsp;

#### custom per-branch aliases

use the `--alias` option to set custom aliases per-branch:

```
npx now-cd --alias "master=myapp.com" --alias "staging=staging.myapp.com"
```

all commits to master will now be aliased to `myapp.com`, and all commits to the staging branch will now be aliased to `staging.myapp.com`!

&nbsp;

#### team account

use the `--team` option to mention your team name

```
npx now-cd --team auth0-design
```

#### make public 

use the `--public` flag

```
npx now-cd --public
```

&nbsp;

#### like it?

:star: this repo

&nbsp;

#### license

MIT © [siddharthkp](https://github.com/siddharthkp)
