const pkgDir = require('pkg-dir')
const tokens = require('./tokens')
const rootDir = pkgDir.sync(__dirname)
const argv = require('yargs').argv

const teamFlag = argv.team ? `--team=${argv.team}` : ''
const public = argv.public ? '--public' : ''

const command = absolute => {
  return `${rootDir}/node_modules/.bin/${absolute} -t ${tokens.now} ${public} ${teamFlag} -e NODE_ENV=production`
}

module.exports = command
