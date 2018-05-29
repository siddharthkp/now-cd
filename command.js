const pkgDir = require('pkg-dir')
const tokens = require('./tokens')
const rootDir = pkgDir.sync(__dirname)
const argv = require('yargs').argv

let teamFlag = ''
if (argv.team) teamFlag = `--team=${argv.team}`

const command = absolute => {
  return `${rootDir}/node_modules/.bin/${absolute} -t ${tokens.now} ${teamFlag}`
}

module.exports = command
