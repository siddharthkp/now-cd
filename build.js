const Build = require('github-build')
let { event, repo, sha, branch } = require('ci-env')
const prettycli = require('prettycli')

const tokens = require('./tokens')

const handleError = err => {
  const message = `Could not add github status. ${err.status}: ${err.error.message}`
  prettycli.error(message, { silent: true, label: 'ERROR' })
}

/* Create a new build */
const build = new Build({
  repo,
  sha,
  token: tokens.github,
  label: 'NOW_CD',
  description: 'Deploying...'
})

/* auto start build */
build.start().catch(handleError)

const pass = url => {
  build.pass('Deployed to staging', `https://${url}`).catch(handleError)
}
const error = _ => build.error('Deployment failed!').catch(handleError)

module.exports = { pass, error }
