<p align="center">
  <img src="https://octodex.github.com/images/codercat.jpg" height="200px"/><img src="https://assets.zeit.co/image/upload/front/logos/white-bg-logo-1200.png" height="200px"/><img src="https://media.giphy.com/media/GxZ8bBoZJAIIo/giphy.gif" height="200px"/>
  <br><br>
  <b>Comment on a pull request on GitHub from your CI</b>
  <br><br>
</p>

&nbsp;

Each pull request gets it's own deployment instance `https://{author}-{repo}-{branch-name}.now.sh`

This is updated on every commit to the matching pull request.

The master branch is deployed on `https://{author}-{repo}.now.sh`

&nbsp;

#### install

Add a now API key to `package.json`

```json
{
  "now-cd-key": "secret"
}
```

&nbsp;

#### usage

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
