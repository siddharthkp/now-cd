const pkgDir = require('pkg-dir')
const tokens = require('./tokens')
const rootDir = pkgDir.sync(__dirname)

const teamFlag = process.argv[2] || ''

const command = absolute => {
  return `${rootDir}/node_modules/.bin/${absolute} -t ${tokens.now} ${teamFlag}`
}

module.exports = command
