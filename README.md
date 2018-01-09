<p align="center">
  <img src="https://octodex.github.com/images/codercat.jpg" height="200px"/><img src="https://avatars1.githubusercontent.com/u/14985020?s=200&v=4" height="200px"/><img src="https://media.giphy.com/media/GxZ8bBoZJAIIo/giphy.gif" height="200px"/>
  <br><br>
  <b>Comment on a pull request on GitHub from your CI</b>
  <br><br>
  <img src="https://travis-ci.org/siddharthkp/ci-github-comment.svg?branch=master&maxAge=3600"/>
</p>

Each pull request gets it's own deployment instance `https://{author}-{repo}-{branch-name}.now.sh`

This is updated on every commit to the matching pull request.

The master branch is deployed on `https://{author}-{repo}.now.sh`

&nbsp;

#### install

Add a now API key to `package.json`

```json
{
  "now-ci-key": "secret"
}
```

&nbsp;

#### usage

```yml
after_success:
  - npx now-cli
```

&nbsp;

#### like it?

:star: this repo

&nbsp;

#### license

MIT © [siddharthkp](https://github.com/siddharthkp)
