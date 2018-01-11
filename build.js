const Build = require('github-build')
let { event, repo, sha, branch } = require('ci-env')
const prettycli = require('prettycli')

const tokens = require('./tokens')

/* Create a new build */
const build = new Build({
  repo,
  sha,
  token: tokens.github,
  label: 'now-cd',
  description: 'Deploying...'
})

const start = _ => build.start()
const pass = url => build.pass('Deployed to staging', `https://${url}`)
const error = _ => build.error('Deployment failed!')

module.exports = { start, pass, error }
