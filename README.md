<p align="center">
  <img src="https://octodex.github.com/images/codercat.jpg" height="200px"/><img src="https://assets.zeit.co/image/upload/front/logos/white-bg-logo-1200.png" height="200px"/><img src="https://media.giphy.com/media/GxZ8bBoZJAIIo/giphy.gif" height="200px"/>
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

You can generate a token from [account/tokens](https://zeit.co/account/tokens)

2. Github API token

You can generate a token from [settings/tokens/new](https://github.com/settings/tokens/new)

Now set these in travis repository settings [This is how](https://docs.travis-ci.com/user/environment-variables/#Defining-Variables-in-Repository-Settings).

Use `NOW_CD_TOKEN` and `NOW_CD_GITHUB_TOKEN` as keys.

&nbsp;

#### usage

add this to `.travis.yml`:

```yml
after_success:
  - npx now-cd
```

&nbsp;

#### like it?

:star: this repo

&nbsp;

#### license

MIT © [siddharthkp](https://github.com/siddharthkp)
